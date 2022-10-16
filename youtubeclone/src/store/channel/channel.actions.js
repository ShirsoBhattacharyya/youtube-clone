import request from "../../api"
import { CHANNEL_DETAILS_FAILED, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, SET_SUBSCRIPTION_STATUS } from "./channel.action.types"

export const getChannelDetails =(id)=>async (dispatch) => {
    try {
       dispatch({type: CHANNEL_DETAILS_REQUEST})
 
       const res=await request.get('/channels', {
          params: {
             part: 'snippet,statistics,contentDetails',
             id,
          },
       })
       dispatch({
          type: CHANNEL_DETAILS_SUCCESS,
          payload: res.data.items[0],
       })
    } catch (e) {
       console.log(e.response.data)
       dispatch({
          type: CHANNEL_DETAILS_FAILED,
          payload: e.response.data,
       })
    }
}

export const checkSubscriptionStatus=(id)=>async (dispatch, getState) => {
    try {
       const res = await request('/subscriptions', {
          params: {
             part: 'snippet',
             forChannelId: id,
             mine: true,
          },
          headers: {
             Authorization: `Bearer ${getState().auth.accessToken}`,
          },
       })
       dispatch({
          type: SET_SUBSCRIPTION_STATUS,
          payload: res.data.items.length !== 0,
       })
       console.log(res.data)
    } catch (e) {
       console.log(e.response.data)
    }
}