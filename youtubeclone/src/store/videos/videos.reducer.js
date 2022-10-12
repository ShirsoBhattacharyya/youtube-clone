import { HOME_VIDEOS_FAILED, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "./videos.action.types"

const initialState={
    videos:[],
    loading:false,
    nextPageToken:null
}
export const homeVideosReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case HOME_VIDEOS_REQUEST:{
            return {
                ...state,loading:true
            }
        }
        case HOME_VIDEOS_SUCCESS:{
            return {
                ...state,videos:payload.videos,loading:false,nextPageToken:payload.nextPageToken
            }
        }
        case HOME_VIDEOS_FAILED:{
            return {
                ...state,
                loading:false,
                error:payload
            }
        }
        default: return state;
    }
}