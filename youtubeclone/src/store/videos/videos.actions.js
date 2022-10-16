import { HOME_VIDEOS_FAILED, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, RELATED_VIDEO_FAILED, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, SELECTED_VIDEO_FAILED, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "./videos.action.types"
import request from "../../api";
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