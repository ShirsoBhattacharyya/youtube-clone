import request from "../../api"
import { COMMENT_LIST_FAILED, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS, CREATE_COMMENT_FAILED, CREATE_COMMENT_SUCCESS } from "./comments.action.types"

export const getCommentsOfVideoById = id => async dispatch => {
    try {
       dispatch({type: COMMENT_LIST_REQUEST,})
       const res = await request.get('/commentThreads', {
          params: {
             part: 'snippet',
             videoId: id,
          },
       })
       dispatch({
          type: COMMENT_LIST_SUCCESS,
          payload: res.data.items,
       })
    } catch (e) {
       console.log(e.response.data)
       dispatch({
          type: COMMENT_LIST_FAILED,
          payload: e.response.data.message,
       })
    }
 }
 
 export const addComment = (id, text) => async (dispatch, getState) => {
    try {
       const obj = {
          snippet: {
             videoId: id,
             topLevelComment: {
                snippet: {
                   textOriginal: text,
                },
             },
          },
       }
 
       await request.post('/commentThreads', obj, {
          params: {
             part: 'snippet',
          },
          headers: {
             Authorization: `Bearer ${getState().auth.accessToken}`,
          },
       })
       dispatch({
          type: CREATE_COMMENT_SUCCESS,
       })
 
       setTimeout(() => dispatch(getCommentsOfVideoById(id)), 3000)
    } catch (e) {
       console.log(e.response.data)
       dispatch({
          type: CREATE_COMMENT_FAILED,
          payload: e.response.data.message,
       })
    }
 }