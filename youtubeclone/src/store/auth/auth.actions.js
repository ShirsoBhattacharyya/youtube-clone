//importing the google auth provider object
import auth from '../../firebase';
import firebase from 'firebase/compat/app';
import { LOAD_PROFILE, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from './auth.action.types';


export const login=()=>async dispatch=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const provider=new firebase.auth.GoogleAuthProvider();
        //adding this scope ensures that google actually permits us to add,edit and delete comments,videos and posts.
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
        const res=await auth.signInWithPopup(provider);
        console.log(res);
        const accessToken=res.credential.accessToken;
        const profile={
            name:res.additionalUserInfo.profile.name,
            photoURL:res.additionalUserInfo.profile.picture
        }
        localStorage.setItem('yt-clone-access-token',accessToken);
        localStorage.setItem('yt-clone-user',JSON.stringify(profile));
        dispatch({
            type:LOGIN_SUCCESS,
            payload:accessToken
        })
        dispatch({
            type:LOAD_PROFILE,
            payload:profile
        })
    }catch(e){
        console.log(e.message);
        dispatch({
            type:LOGIN_FAILED,
            payload:e.message
        })
    }
}
export const logout=()=>async dispatch=>{
    await auth.signOut()
    dispatch({type:LOGOUT})
    localStorage.removeItem('yt-clone-access-token');
    localStorage.removeItem('yt-clone-user');
}