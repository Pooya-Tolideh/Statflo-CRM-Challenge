//Combine all reducers into rootReducer

import { combineReducers } from 'redux'
import activePage          from './reducer_activePage.js'
import activeList          from './reducer_activeList.js'
import dataBase            from './reducer_dataBase.js'
import snackStat           from './reducer_SnackBar.js'

const rootReducer = combineReducers({
    activePage: activePage,
    activeList: activeList,
    dataBase:   dataBase,
    snackStat:  snackStat
});
export default rootReducer