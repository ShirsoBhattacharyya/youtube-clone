import { HOME_VIDEOS_FAILED, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, RELATED_VIDEO_FAILED, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, SELECTED_VIDEO_FAILED, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "./videos.action.types"

export const homeVideosReducer=(state={videos:[],loading:false,nextPageToken:null,activeCategory:'All'},{type,payload})=>{
    switch(type){
        case HOME_VIDEOS_REQUEST:{
            return {
                ...state,
                loading:true
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
export const selectedVideoReducer = (state = {loading: true,video: null},{ type,payload }) => {
 
    switch (type) {
       case SELECTED_VIDEO_REQUEST:{
          return {
             ...state,
             loading:true,
          }
        }
       case SELECTED_VIDEO_SUCCESS:{
          return {
             ...state,
             loading:false,
             video: payload,
          }
        }
       case SELECTED_VIDEO_FAILED:{
          return {
             ...state,
             loading:false,
             video: null,
             error: payload,
          }
        }
       default: return state
    }
}

export const relatedVideoReducer = (state = {loading: true,videos:[],},{type,payload}) => {
    switch (type) {
       case RELATED_VIDEO_REQUEST:{
          return {
             ...state,
             loading: true,
          }
        }
       case RELATED_VIDEO_SUCCESS:{
          return {
             ...state,
             videos: payload,
             loading: false,
          }
        }
       case RELATED_VIDEO_FAILED:{
          return {
             ...state,
             loading: false,
             error: payload,
          }
        }
       default:return state
    }
 }