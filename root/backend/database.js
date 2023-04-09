const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const firebaseConfig = require('./config');

//connecting firebase
const fireApp = initializeApp(firebaseConfig);
const database = getFirestore(fireApp);

module.exports = database;