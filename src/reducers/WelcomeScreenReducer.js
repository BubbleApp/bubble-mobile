//main, login, signup
export default (state = 'main', action) => {
    switch(action.type) {
        case 'welcome_screen':
            return action.payload;
        default:
            return state;
    }
}
