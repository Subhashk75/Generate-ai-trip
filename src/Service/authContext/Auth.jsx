import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateCurrentUser, updatePassword } from "firebase/auth";

const auth = getAuth();

export  const doCreateUserWithEmailAndPassword =(email,password)=>{
    return createUserWithEmailAndPassword(auth ,email,password);
}

export const  doSignInWithEmailAndPassword=(email,password)=>{
     return signInWithEmailAndPassword(auth,email,password)
}

export  const doSignOut =()=>{
    return auth.signOut();
}

export const doPasswordReset =(email)=>{
    return sendPasswordResetEmail(auth,email)
}

export const doPasswordChange=(password)=>{
    return updatePassword(auth.currentUser,password)
}
6