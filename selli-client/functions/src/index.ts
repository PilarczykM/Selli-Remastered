import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
admin.initializeApp()

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.region('europe-west2').https.onRequest((request, response) => {
  response.send('Hello from Firebase!')
})

export const onAccountAdded = functions
  .region('europe-west2')
  .auth.user()
  .onCreate((user) => {
    console.log('User was created: ' + user)
    return admin.firestore().collection('users').doc(user.uid).set({
      email: user.email,
      userName: user.displayName,
      photoURL: user.photoURL,
    })
  })
