// Determines what type of list needs to appear in the dashboard

const activeList = (state = 'ACCOUNT', action) => {
    switch (action.type) {
        case 'CHANGE_LIST':
            return action.filter
        default:
            return state
    }
}
export default activeList