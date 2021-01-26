//import {observe} from "web-vitals/dist/lib/observe";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'Hi, how are you', likesCount: 3},
                {id: 2, message: "It's my first post", likesCount: 5},
                {id: 3, message: "Hello everyone", likesCount: 0}],
            newPostText: "Chesc!",
        },
        dialogsPage: {
            messages:
                [{id: 1, message: 'Hi'},
                {id: 2, message: 'How is your health?'},
                {id: 3, message: 'Nihaoma'}],
            dialogs:
                [{id: 1, name: 'Bodya'},
                {id: 2, name: 'Gena'},
                {id: 3, name: 'Gena'},
                {id: 4, name: 'Andrew'},
                {id: 5, name: 'Vova'}],
            newMessageBody: ""
        },
        sidebarPage: {

        }

    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;