//cancalButton
//Type: Semi-Container ==> Dispatch Only
//gets the activeList from the page
//then dispatches setPage and setFilterList
//to fetch and render the previous state before opening the form

import React       from 'react'
import { connect } from 'react-redux'
import { setPage, setListFilter } from '../actions/index.js'
import RaisedButton from 'material-ui/RaisedButton'
import { grey100, blue900 , blue100 } from 'material-ui/styles/colors'

let CancelButton = ({dispatch,activeList}) => {
    return (
        <div onClick = {e => {
            e.preventDefault()
            dispatch(setPage({page:'OPEN_DASHBOARD'}))
            dispatch(setListFilter(activeList))
            }}
        >
            <RaisedButton
                label = "Cancel"
                backgroundColor = {grey100}
                labelStyle  = {{color:blue900}}
                rippleStyle = {{backgroundColor:blue100}}
                className   = "actionButton"
            />
        </div>
    )
}
CancelButton = connect()(CancelButton)

export default CancelButton
