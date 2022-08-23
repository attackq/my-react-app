import {rerenderEntireTree} from "../render";

let state = {
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
        newMessageText: 'type something',
        dialogs: [
            {id: 1, name: 'Dima', logo: 'https://media.istockphoto.com/photos/small-shrinking-currency-dollar-in-inflation-on-white-background-picture-id174672992?k=20&m=174672992&s=170667a&w=0&h=Rr0jffK_3BH408K7BVQ_QMLNHO6sNmJE8JJfwBVzkmw='},
            {id: 2, name: 'Andrew', logo: 'https://media.istockphoto.com/photos/small-shrinking-currency-dollar-in-inflation-on-white-background-picture-id174672992?k=20&m=174672992&s=170667a&w=0&h=Rr0jffK_3BH408K7BVQ_QMLNHO6sNmJE8JJfwBVzkmw='},
            {id: 3, name: 'Egor', logo: 'https://media.istockphoto.com/photos/small-shrinking-currency-dollar-in-inflation-on-white-background-picture-id174672992?k=20&m=174672992&s=170667a&w=0&h=Rr0jffK_3BH408K7BVQ_QMLNHO6sNmJE8JJfwBVzkmw='},
            {id: 4, name: 'Alex', logo: 'https://media.istockphoto.com/photos/small-shrinking-currency-dollar-in-inflation-on-white-background-picture-id174672992?k=20&m=174672992&s=170667a&w=0&h=Rr0jffK_3BH408K7BVQ_QMLNHO6sNmJE8JJfwBVzkmw='},
            {id: 5, name: 'Sam', logo: 'https://media.istockphoto.com/photos/small-shrinking-currency-dollar-in-inflation-on-white-background-picture-id174672992?k=20&m=174672992&s=170667a&w=0&h=Rr0jffK_3BH408K7BVQ_QMLNHO6sNmJE8JJfwBVzkmw='},
            {id: 6, name: 'Gangsta', logo: 'https://media.istockphoto.com/photos/small-shrinking-currency-dollar-in-inflation-on-white-background-picture-id174672992?k=20&m=174672992&s=170667a&w=0&h=Rr0jffK_3BH408K7BVQ_QMLNHO6sNmJE8JJfwBVzkmw='}
        ],
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updatePostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 5,
        text: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let updateMessageText = (newMessageText) => {
    state.dialogsPage.newMessageText = newMessageText;
    rerenderEntireTree(state);
}

export default state;