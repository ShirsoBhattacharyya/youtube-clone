import { HOME_VIDEOS_FAILED, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "./videos.action.types"

const initialState={
    videos:[],
    loading:false,
    nextPageToken:null,
    activeCategory:'All'
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
                ...state,videos:state.activeCategory===payload.category?[...state.videos,...payload.videos]:payload.videos,
                loading:false,
                nextPageToken:payload.nextPageToken,
                activeCategory:payload.category
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