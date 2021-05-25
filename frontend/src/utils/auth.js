import { auth } from '../firebase';

export function signup(email, password, dob, address) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
  //console.log("in sign in")
  return auth().signInWithEmailAndPassword(email, password)
}

export function logout() {
 // console.log('logout auth');
  return auth().signOut()
}