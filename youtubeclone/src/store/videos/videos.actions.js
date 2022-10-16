import { CHANNEL_VIDEOS_REQUEST, CHANNEL_VIDEOS_SUCCESS, HOME_VIDEOS_FAILED, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, RELATED_VIDEO_FAILED, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, SEARCHED_VIDEO_FAILED, SEARCHED_VIDEO_REQUEST, SEARCHED_VIDEO_SUCCESS, SELECTED_VIDEO_FAILED, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS, SUBSCRIPTIONS_CHANNEL_FAILED, SUBSCRIPTIONS_CHANNEL_REQUEST, SUBSCRIPTIONS_CHANNEL_SUCCESS } from "./videos.action.types"
import request from "../../api";
import { CHANNEL_DETAILS_FAILED } from "../channel/channel.action.types";
// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

export const getPopularVideos=()=>async (dispatch,getState)=>{
    try {
        dispatch({type:HOME_VIDEOS_REQUEST});
        const res=await request.get("/videos",{
            params:{
                part:'snippet,contentDetails,statistics',
                chart:'mostPopular',
                regionCode:'IN',
                maxResults:20,
                pageToken:getState().homeVideos.nextPageToken
            }
        })
        console.log(res);
        dispatch({type:HOME_VIDEOS_SUCCESS,payload:{
            videos:res.data.items,
            nextPageToken:res.data.nextPageToken,
            category:'All'
        }})
    } catch (e) {
        console.log(e.message);
        dispatch({type:HOME_VIDEOS_FAILED,payload:e.message})
    }
}

export const getVideosByCategory=(keyword)=>async (dispatch,getState)=>{
    try {
        dispatch({type:HOME_VIDEOS_REQUEST});
        const res=await request.get("/search",{
            params:{
                part:'snippet',
                maxResults:20,
                pageToken:getState().homeVideos.nextPageToken,
                q: keyword,
                type: 'video'
            }
        })
        console.log(res);
        dispatch({type:HOME_VIDEOS_SUCCESS,payload:{
            videos:res.data.items,
            nextPageToken:res.data.nextPageToken,
            category:keyword
        }})
    } catch (e) {
        console.log(e.message);
        dispatch({type:HOME_VIDEOS_FAILED,payload:e.message})
    }
}

export const getVideoById =(id)=> async (dispatch)=> {
    try {
       dispatch({type: SELECTED_VIDEO_REQUEST})
       const res = await request.get('/videos', {
          params: {
             part: 'snippet,statistics',
             id: id,
            },
        })
       dispatch({
          type: SELECTED_VIDEO_SUCCESS,
          payload: res.data.items[0],
       })
    } catch (e) {
       console.log(e.message)
       dispatch({
          type: SELECTED_VIDEO_FAILED,
          payload: e.message,
       })
    }
}

export const getRelatedVideos=(id)=> async (dispatch) => {
    try {
       dispatch({
          type: RELATED_VIDEO_REQUEST,
       })
 
       const { data } = await request('/search', {
          params: {
             part: 'snippet',
             relatedToVideoId: id,
             maxResults: 15,
             type: 'video',
          },
       })
       dispatch({
          type: RELATED_VIDEO_SUCCESS,
          payload: data.items,
       })
    } catch (error) {
       console.log(error.response.data.message)
       dispatch({
          type: RELATED_VIDEO_FAILED,
          payload: error.response.data.message,
       })
    }
}

export const getVideosBySearch = keyword => async dispatch => {
    try {
       dispatch({
          type: SEARCHED_VIDEO_REQUEST,
       })
       const { data } = await request('/search', {
          params: {
             part: 'snippet',
 
             maxResults: 20,
             q: keyword,
             type: 'video,channel',
          },
       })
 
       dispatch({
          type: SEARCHED_VIDEO_SUCCESS,
          payload: data.items,
       })
    } catch (error) {
       console.log(error.message)
       dispatch({
          type: SEARCHED_VIDEO_FAILED,
          payload: error.message,
       })
    }
 }
 
 export const getSubscribedChannels = () => async (dispatch, getState) => {
    try {
       dispatch({
          type: SUBSCRIPTIONS_CHANNEL_REQUEST,
       })
       const { data } = await request('/subscriptions', {
          params: {
             part: 'snippet,contentDetails',
 
             mine: true,
          },
          headers: {
             Authorization: `Bearer ${getState().auth.accessToken}`,
          },
       })
       dispatch({
          type: SUBSCRIPTIONS_CHANNEL_SUCCESS,
          payload: data.items,
       })
    } catch (error) {
       console.log(error.response.data)
       dispatch({
          type: SUBSCRIPTIONS_CHANNEL_FAILED,
          payload: error.response.data,
       })
    }
 }
 
 export const getVideosByChannel = id => async dispatch => {
    try {
       dispatch({
          type: CHANNEL_VIDEOS_REQUEST,
       })
 
       // 1. get upload playlist id
       const {
          data: { items },
       } = await request('/channels', {
          params: {
             part: 'contentDetails',
             id: id,
          },
       })
       const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads
       // 2. get the videos using the id
       const { data } = await request('/playlistItems', {
          params: {
             part: 'snippet,contentDetails',
             playlistId: uploadPlaylistId,
             maxResults: 30,
          },
       })
 
       dispatch({
          type: CHANNEL_VIDEOS_SUCCESS,
          payload: data.items,
       })
    } catch (error) {
       console.log(error.response.data.message)
       dispatch({
          type: CHANNEL_DETAILS_FAILED,
          payload: error.response.data,
       })
    }
 }