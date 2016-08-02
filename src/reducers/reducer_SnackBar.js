//Activates the snack bar and passes a specific message to show

const snackStat = (state = {msg:'',id:false}, action) => {
    switch (action.type) {
        case 'SNACK_BAR':
            return action
    default:
        return state
    }
}
export default snackStat