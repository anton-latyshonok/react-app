const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;// = action.text;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogReducer;