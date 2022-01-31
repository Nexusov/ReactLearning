import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

// объект 
let reducers = combineReducers({
    profilePage: profileReducer, // у свойства profilePage значение profileReducer 
    dialogsPage: dialogsReducer, // у свойства dialogsPage значение dialogsReducer 
    sidebar: sidebarReducer,     // у свойства sidebarReducer значение sidebarReducer 
    usersPage: usersReducer,
    auth: authReducer
}); 

let store = createStore(reducers);

window.store = store

export default store