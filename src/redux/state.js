import {renderEntireTree} from "../render";

let state ={
    profilePage: {
        posts: [{id: 1, message: 'Hi, how are you', likesCount: 3},
            {id: 2, message: "It's my first post", likesCount: 5},
            {id: 3, message: "Hello everyone", likesCount: 0}]
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

export let addPost = (postMessage) => {
    let newPost ={
        id: 4,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}


export default state;