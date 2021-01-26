import {observe} from "web-vitals/dist/lib/observe";


let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'Hi, how are you', likesCount: 3},
                {id: 2, message: "It's my first post", likesCount: 5},
                {id: 3, message: "Hello everyone", likesCount: 0}],
            newPostText: "Chesc!",
        },
        dialogsPage: {
            messages: [{id: 1, message: 'Hi'},
                {id: 2, message: 'How is your health?'},
                {id: 3, message: 'Nihaoma'}],
            dialogs: [{id: 1, name: 'Bodya'},
                {id: 2, name: 'Gena'},
                {id: 3, name: 'Gena'},
                {id: 4, name: 'Andrew'},
                {id: 5, name: 'Vova'}]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }


}

export default store;