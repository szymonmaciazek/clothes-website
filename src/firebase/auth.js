import {auth} from './firebase.config';

export const register = (email, password) => {
    return auth().createUserWithEmailAndPassword(email, password);
};

export const login = (email, password) => {
    return auth().signInWithEmailAndPassword(email, password)
};

export const logOut = () => {
    return auth().signOut()
}