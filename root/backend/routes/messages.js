const express = require('express');
const router = express.Router();
const database = require('../database');
const { addDoc, getDocs, query, Timestamp } = require('firebase/firestore');
const { getUser, getMessageCollection } = require('../utils/firebaseUtils');

/* Get all messages from a user */
router.get('/:username', async (req, res, next) => {
  const {username} = req.params;
  const user = await getUser(database, username);
  
  if(!user) {
    res.status(400).send('User does not exist');
  }else {
    const messagesRef = getMessageCollection(database, username);
    if(!messagesRef) { 
      res.status(400).end('Could not communicate with database');
    }
    
  
    const q = query(messagesRef);
    const messages = await getDocs(q);
  
    const validMessages = [];
    messages.forEach((doc) => {
      const {title, text, deliver_date} = doc.data();
    
      if(deliver_date <= Timestamp.now()) {
        const message = {
          title: title,
          text: text,
        }
    
        validMessages.push(message);
      }
   })
   res.status(200).send(validMessages);
  }
});

/* POST a user message */
router.post('/:username', async (req, res, next) => {
  const {username} = req.params;
  const {title, text, date} = req.body;
  const user = await getUser(database, username);
    
  if(!user) {
    res.status(400).send('User does not exist');
  }else {
    try {
      const messagesRef = getMessageCollection(database, username);
      if(!messagesRef) {
          res.status(400).send('Could not communicate with database');
      }

      const temp_date = new Date(parseInt(date));
      const deliver_date = Timestamp.fromDate(temp_date);

      if(!deliver_date) {
        res.status(400).send('Wrong date format');
      }

      const message = {
        title: title,
        text: text,
        deliver_date: deliver_date
      }

      await addDoc(messagesRef, message);
    }catch(e) {
      res.status(400).end('Could not communicate with database');
    }
    
    res.status(200).send('Message has been added');
  }
});

module.exports = router;