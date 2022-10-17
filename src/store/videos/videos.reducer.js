import { CHANNEL_VIDEOS_FAILED, CHANNEL_VIDEOS_REQUEST, CHANNEL_VIDEOS_SUCCESS, HOME_VIDEOS_FAILED, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, RELATED_VIDEO_FAILED, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, SEARCHED_VIDEO_FAILED, SEARCHED_VIDEO_REQUEST, SEARCHED_VIDEO_SUCCESS, SELECTED_VIDEO_FAILED, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS, SUBSCRIPTIONS_CHANNEL_FAILED, SUBSCRIPTIONS_CHANNEL_REQUEST, SUBSCRIPTIONS_CHANNEL_SUCCESS } from "./videos.action.types"

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

export const searchedVideosReducer = (state = {loading: true,videos: []},{type,payload}) => {
    switch (type) {
       case SEARCHED_VIDEO_REQUEST:{
          return {
             ...state,
             loading: true,
          }
        }
       case SEARCHED_VIDEO_SUCCESS:{
          return {
             ...state,
             videos: payload,
             loading: false,
          }
        }
       case SEARCHED_VIDEO_FAILED:{
          return {
             ...state,
             loading: false,
             error: payload,
          }
        }
       default: return state
    }
 }
 
 export const subscriptionsChannelReducer = (state = { loading: true,videos: []},{type,payload}) => {
    switch (type) {
       case SUBSCRIPTIONS_CHANNEL_REQUEST:{
          return {
             ...state,
             loading: true,
          }
        }
       case SUBSCRIPTIONS_CHANNEL_SUCCESS:{
          return {
             ...state,
             videos: payload,
             loading: false,
          }
        }
       case SUBSCRIPTIONS_CHANNEL_FAILED:{
          return {
             ...state,
             loading: false,
             error: payload,
          }
        }
       default:return state
    }
 }
 
 export const channelVideosReducer = (state = {loading: true,videos: []},{type,payload}) => {
    switch (type) {
       case CHANNEL_VIDEOS_REQUEST:{
          return {
             ...state,
             loading: true,
          }
        }
       case CHANNEL_VIDEOS_SUCCESS:{
          return {
             ...state,
             videos: payload,
             loading: false,
          }
        }
       case CHANNEL_VIDEOS_FAILED:{
          return {
             ...state,
             loading: false,
             error: payload,
          }
        }
       default:return state
    }
 }