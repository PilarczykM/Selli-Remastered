import firebase from '../firebase'
import { checkIfNotEmpty } from './utils'

export const createUserWithEmailAndPassword = (email: string, password: string) => {
  if (!checkIfNotEmpty([email, password])) return null
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const updateUserDisplayName = (userName: string, user: firebase.auth.UserCredential) => {
  if (user.user !== null) {
    return user.user.updateProfile({
      displayName: userName,
    })
  }
  return null
}
