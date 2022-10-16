import {legacy_createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {authReducer} from './auth/auth.reducer';
import { channelDetailsReducer } from './channel/channel.reducer';
import { homeVideosReducer, relatedVideoReducer, selectedVideoReducer } from './videos/videos.reducer';
const rootReducer=combineReducers({
    auth:authReducer,
    homeVideos:homeVideosReducer,
    selectedVideo:selectedVideoReducer,
    relatedVideos:relatedVideoReducer,
    channelDetails:channelDetailsReducer
})

const store=legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;