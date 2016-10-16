export default (state = 'main', action) => {
    switch(action.type) {
        case 'welcome_option':
            return action.payload;
        default:
            return state;
    }
}
