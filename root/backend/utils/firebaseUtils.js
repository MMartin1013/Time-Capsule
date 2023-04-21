const { collection, doc, getDoc } = require('firebase/firestore');

/* Retrieves user from the database */
const getUser = async (db, username) => {
    const usersRef = collection(db, 'users');
    const userDoc = doc(usersRef, username);
    let user;
    try {
        const userSnapshot = await getDoc(userDoc);
        user = userSnapshot.data();
    } catch (error) {
        console.log(error);
    } finally {
        return user;
    }
}

module.exports = { getUser };