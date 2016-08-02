//Save Button
//Type: Presentaional Component Only
//Dispatches the form values to update Data
//then dispatches view render and reseting actions

import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { blue50 , blue200 , blue900 } from 'material-ui/styles/colors'

const SaveButton = ({onClick}) => {
    return (
        <div>
            <RaisedButton
                onClick = {onClick}
                label   = "Save"
                backgroundColor = {blue900}
                labelStyle  = {{color:blue50, padding:1}}
                rippleStyle = {{backgroundColor:blue200}}
                className   = "actionButton"
            />
        </div>
    )
}
export default SaveButton