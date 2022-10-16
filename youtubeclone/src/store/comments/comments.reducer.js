import { COMMENT_LIST_FAILED, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS } from "./comments.action.types"

export const commentListReducer = ( state = {loading: true,comments: null},{type,payload}) => {
    switch (type) {
       case COMMENT_LIST_REQUEST:{
          return {
             ...state,
             loading: true,
          }
        }
       case COMMENT_LIST_SUCCESS:{
          return {
             ...state,
             comments: payload,
             loading: false,
          }
        }
       case COMMENT_LIST_FAILED:{
          return {
             ...state,
             loading: false,
             error: payload,
          }
        }
       default: return state
    }
 }