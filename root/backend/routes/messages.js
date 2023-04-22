const express = require('express');
const router = express.Router();
const database = require('../database');
const { addDoc, Timestamp } = require('firebase/firestore');
const { getUser, getMessageCollection } = require('../utils/firebaseUtils');

/* Get all messages from a user */
router.get('/', async (req, res, next) => {
  res.status(200);
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

        const temp_date = new Date(Date.parse(date));
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
        res.status(400).send('Could not communicate with database');
      }
      
      res.status(200).send('Message has been added');
    }
  });

module.exports = router;