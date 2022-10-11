import {legacy_createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {authReducer} from './auth/auth.reducer';
const rootReducer=combineReducers({
    auth:authReducer
})

const store=legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store;