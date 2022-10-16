import {legacy_createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {authReducer} from './auth/auth.reducer';
import { channelDetailsReducer } from './channel/channel.reducer';
import { commentListReducer } from './comments/comments.reducer';
import { channelVideosReducer, homeVideosReducer, relatedVideoReducer, searchedVideosReducer, selectedVideoReducer, subscriptionsChannelReducer } from './videos/videos.reducer';
const rootReducer=combineReducers({
    auth:authReducer,
    homeVideos:homeVideosReducer,
    selectedVideo:selectedVideoReducer,
    relatedVideos:relatedVideoReducer,
    channelDetails:channelDetailsReducer,
    commentList: commentListReducer,
    searchedVideos: searchedVideosReducer,
    subscriptionsChannel: subscriptionsChannelReducer,
    channelVideos: channelVideosReducer
})

const store=legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;