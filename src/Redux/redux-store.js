import { combineReducers, createStore, applyMiddleware } from 'redux';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'

// объект 
let reducers = combineReducers({
    profilePage: profileReducer, // у свойства profilePage значение profileReducer 
    dialogsPage: dialogsReducer, // у свойства dialogsPage значение dialogsReducer 
    sidebar: sidebarReducer,     // у свойства sidebarReducer значение sidebarReducer 
    usersPage: usersReducer,
    auth: authReducer
}); 

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store