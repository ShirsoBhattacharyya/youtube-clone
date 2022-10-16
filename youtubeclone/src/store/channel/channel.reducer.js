import { CHANNEL_DETAILS_FAILED, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, SET_SUBSCRIPTION_STATUS } from "./channel.action.types"

export const channelDetailsReducer = (
    state = {loading:false,channel:{},subscriptionStatus:false},{type,payload}) => {
    switch (type) {
       case CHANNEL_DETAILS_REQUEST:{
          return {
             ...state,
             loading: true,
          }
        }
       case CHANNEL_DETAILS_SUCCESS:{
          return {
             ...state,
             channel: payload,
             loading: false,
          }
        }
       case CHANNEL_DETAILS_FAILED:{
          return {
             ...state,
             channel: null,
             loading: false,
             error: payload,
          }
        }
       case SET_SUBSCRIPTION_STATUS:{
          return {
             ...state,
             subscriptionStatus: payload,
          }
        }
       default:return state
    }
}