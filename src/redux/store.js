import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'My first post', likesCount: 2},
                {id: 2, text: 'How are you?', likesCount: 12},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state was changed!')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();

    }
}





export default store;
window.store = store;