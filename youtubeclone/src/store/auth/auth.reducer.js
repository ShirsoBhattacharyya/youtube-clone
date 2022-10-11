import { LOAD_PROFILE, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./auth.action.types";

const initialState={
    accessToken:localStorage.getItem('yt-clone-access-token')||null,
    user:JSON.parse(localStorage.getItem('yt-clone-user'))||null,
    loading:false
};
export const authReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:{
            return {
                ...state,
                loading:true
            }
        }
        case LOGIN_SUCCESS:{
         return {
                ...state,
                accessToken: payload,
                loading: false,
            }
        }
      case LOGIN_FAILED:{
         return {
                ...state,
                accessToken: null,
                loading: false,
                error: payload,
            }
        }
      case LOAD_PROFILE:{
         return {
                ...state,
                user: payload,
            }
        }
      case LOGOUT:{
         return {
                ...state,
                accessToken: null,
                user: null
            }
        }
      default:
         return state
    }
}