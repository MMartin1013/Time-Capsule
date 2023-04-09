const express = require('express');
const router = express.Router();
const database = require('../database');
const { collection, getDoc, doc } = require('firebase/firestore');

router.get('/', (req, res, next) => {
  res.status(200).send(`Reached ${req.originalUrl} with request: ${req.body} `); 
});

/* GET user and check if password matches */
router.get('/:username/:password/', async (req, res, next) => {
  const {username, password} = req.params;
  const user = await getUser(database, username);
  if(user && user.password == password) {
    res.sendStatus(200);
  }else {
    res.sendStatus(404);
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
