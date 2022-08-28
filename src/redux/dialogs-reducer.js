const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1, text: 'hi'},
        {id: 2, text: 'How are you'},
        {id: 3, text: 'i am here'}
    ],
    dialogs: [
        {
            id: 1,
            name: 'Dima',
            logo: 'https://media.istockphoto.com/photos/small-shrinking-currency-dollar-in-inflation-on-white-background-picture-id174672992?k=20&m=174672992&s=170667a&w=0&h=Rr0jffK_3BH408K7BVQ_QMLNHO6sNmJE8JJfwBVzkmw='
        },
        {
            id: 2,
            name: 'Andrew',
            logo: 'https://media.istockphoto.com/photos/small-shrinking-currency-dollar-in-inflation-on-white-background-picture-id174672992?k=20&m=174672992&s=170667a&w=0&h=Rr0jffK_3BH408K7BVQ_QMLNHO6sNmJE8JJfwBVzkmw='
        },
        {
            id: 3,
            name: 'Egor',
            logo: 'https://media.istockphoto.com/photos/small-shrinking-currency-dollar-in-inflation-on-white-background-picture-id174672992?k=20&m=174672992&s=170667a&w=0&h=Rr0jffK_3BH408K7BVQ_QMLNHO6sNmJE8JJfwBVzkmw='
        },
        {
            id: 4,
            name: 'Alex',
            logo: 'https://media.istockphoto.com/photos/small-shrinking-currency-dollar-in-inflation-on-white-background-picture-id174672992?k=20&m=174672992&s=170667a&w=0&h=Rr0jffK_3BH408K7BVQ_QMLNHO6sNmJE8JJfwBVzkmw='
        },
        {
            id: 5,
            name: 'Sam',
            logo: 'https://media.istockphoto.com/photos/small-shrinking-currency-dollar-in-inflation-on-white-background-picture-id174672992?k=20&m=174672992&s=170667a&w=0&h=Rr0jffK_3BH408K7BVQ_QMLNHO6sNmJE8JJfwBVzkmw='
        },
        {
            id: 6,
            name: 'Gangsta',
            logo: 'https://media.istockphoto.com/photos/small-shrinking-currency-dollar-in-inflation-on-white-background-picture-id174672992?k=20&m=174672992&s=170667a&w=0&h=Rr0jffK_3BH408K7BVQ_QMLNHO6sNmJE8JJfwBVzkmw='
        }
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                text: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE})

export const updateMessageTextCreator = (text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        newMessageText: text
    }
}

export default dialogsReducer;