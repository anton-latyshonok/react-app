import {observe} from "web-vitals/dist/lib/observe";

let renderEntireTree = () => {

}

let state ={
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
}

export const addPost = () => {
    let newPost ={
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;