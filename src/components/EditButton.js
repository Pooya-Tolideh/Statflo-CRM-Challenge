//EditButton
//Type: Presentational Component

import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import {white,blue900,blue100} from 'material-ui/styles/colors'

let EditButton = ({onClick}) => {
    return (
        <div onClick = {onClick}>
            <FlatButton
                label = "Edit"
                backgroundColor = {white}
                style = {{
                    color: blue900,
                    borderColor: blue900,
                    borderWidth: 1,
                    borderStyle: "solid"
                }}
                hoverColor = {blue100}
                icon={
                    <FontIcon className = "material-icons" color = {blue900}>
                      edit
                    </FontIcon>
                }
            />
        </div>

  )
}

 export default EditButton