import { HOME_VIDEOS_FAILED, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "./videos.action.types"
import request from "../../api";
// GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

export const getPopularVideos=()=>async dispatch=>{
    try {
        dispatch({type:HOME_VIDEOS_REQUEST});
        const res=await request.get("/videos",{
            params:{
                part:'snippet,contentDetails,statistics',
                chart:'mostPopular',
                regionCode:'IN',
                maxResults:20,
                pageToken:''
            }
        })
        console.log(res);
        dispatch({type:HOME_VIDEOS_SUCCESS,payload:{
            videos:res.data.items,
            nextPageToken:res.data.nextPageToken
        }})
    } catch (e) {
        console.log(e.message);
        dispatch({type:HOME_VIDEOS_FAILED,payload:e.message})
    }
}