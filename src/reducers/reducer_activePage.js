//Determins what page needs to be rendered into mainView component

const activePage = (state = 'OPEN_DASHBOARD', action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return action.page
        case 'EDIT_INFO':
            switch(action.activeList){
                case 'ACCOUNT':
                    return {page:'OPEN_EDIT_ACCOUNT',id:action.rowId}
                case 'LEAD':
                    return {page:'OPEN_EDIT_LEAD',id:action.rowId}
                case 'CALL':
                    return {page:'OPEN_EDIT_CALL',id:action.rowId}
                default:
                    return {page:'OPEN_EDIT_APPT',id:action.rowId}
            }
        default:
            return state
    }
}
export default activePage