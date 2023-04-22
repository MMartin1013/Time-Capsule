const { collection, doc, getDoc } = require('firebase/firestore');

/* Retrieves user from the database */
const getUser = async (db, username) => {
    if(!username) {
        return undefined;
    }

    const usersRef = collection(db, 'users');
    const userDoc = doc(usersRef, username);
    let user;
    try {
        const userSnapshot = await getDoc(userDoc);
        user = userSnapshot.data();
    } catch (error) {
        console.log(error);
        return user;
    }
    return user;
}

const getMessageCollection = (db, username) => {
    const usersRef = collection(db, 'users');
    const userRef = doc(usersRef, username);
    const messagesRef = collection(userRef, 'messages');
    return messagesRef;
}

module.exports = { getUser, getMessageCollection };