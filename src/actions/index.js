//---------------------------------//
//---------PAGE SELECTION ---------//
//---------------------------------//

export const setPage = (page) => {
    return {
        type: 'SET_PAGE',
        page
    }
}


//-------------------------------------------//
//---------CHANGE TABS IN DASHBOARD ---------//
//-------------------------------------------//


export const setListFilter = (filter) => {
    return {
        type: 'CHANGE_LIST',
        filter
    }
}

//-------------------------------------------//
//---------ADDS THE NEW ITEM TO LIST --------//
//-------------------------------------------//

export const addToList = (submission,filter) => {
    return {
        type: 'ADD_TO',
        submission,
        filter
    }
}

//---------------------------------------------------//
//-----TOGGLES HOVERED ON/OFF TO SHOW EDIT BUTTON ---//
//---------------------------------------------------//

export const toggleHover = (rowId) => {
    return {
        type: 'TOGGLE_ON',
        rowId
    }
}


//-------------------------------------------//
//---------CONVERT LEAD TO ACCOUNT-----------//
//-------------------------------------------//

export const convertLead = (rowId) => {
    return {
        type: 'CONVERT_LEAD',
        rowId
    }
}

//-------------------------------------------//
//---------FETCH EDIT PAGE ------------------//
//-------------------------------------------//

export const editInfo = (rowId, activeList) => {
    return {
        type: 'EDIT_INFO',
        rowId,
        activeList
    }
}

//-------------------------------------------//
//---------UPDATE CURRENT LIST ITEM----------//
//-------------------------------------------//

export const updateList = (update,filter) => {
    return {
        type: 'UPDATE_LIST',
        update,
        filter
    }
}



//-------------------------------------------//
//---------FETCH SNACK BAR-------------------//
//-------------------------------------------//

export const getSnack = (msg) => {
    return {
        type: 'SNACK_BAR',
        id: true,
        msg
    }
}






















