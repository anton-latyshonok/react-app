let state ={
    profilePage: {
        posts: [{id: 1, post: 'Hi, how are you', likesCount: 3},
            {id: 2, post: "It's my first post", likesCount: 5},
            {id: 3, post: "Hello everyone", likesCount: 0}]
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

export default state;