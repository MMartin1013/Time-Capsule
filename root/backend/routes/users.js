const express = require('express');
const router = express.Router();
const database = require('../database');
const { collection, doc, getDoc, setDoc } = require('firebase/firestore');

/* GET user and check if password matches */
router.get('/', async (req, res, next) => {
  const {username, password} = req.query;
  const user = await getUser(database, username);
  
  if(user && user.password === password) {
    res.status(200).send('User found!');
  }else {
    res.status(404).send('User not found.');
  }
});


/* POST user and password if user does not exist*/
router.post('/', async (req, res, next) => {
  const {username, password} = req.body;
  const user = await getUser(database, username);
  
  if(user) {
    res.status(400).send('Username already exists');
  }else {
    try {
      await setDoc(doc(database, 'users', username), {
        username: username,
        password: password,
      });
    }catch(e) {
      res.status(400).send('Could not communicate with database');
    }
    
    res.status(200).send('User has been added');
  }
});

/* Retrieves user from the database */
const getUser = async (db, username) => {
  const usersRef = collection(db, 'users');
  const userDoc = doc(usersRef, username);
  const userSnapshot = await getDoc(userDoc);
  const user = userSnapshot.data();
    
  return user;
}

module.exports = router;
