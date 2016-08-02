//AddButton.js
//Type: Semi-Container ==> Dispatch Only
// Button for Adding Action

import React from 'react'
import { connect } from 'react-redux'
import { setPage } from '../actions/index.js'

import FontIcon from 'material-ui/FontIcon'
import {blue500} from 'material-ui/styles/colors'

let AddButton = ({icon, goTo, children, dispatch}) => (

      <a
        href    = "#"
        style   = {{textDecoration: "none"}}
        onClick = {e => {
            e.preventDefault()
            dispatch(setPage({page:goTo}))
        }}
      >
          <div className = "AddButton">
                <FontIcon
                    style     = {{fontSize:64}}
                    className = "material-icons"
                    color     = {blue500}>
                    {icon}
                </FontIcon>
                <p className = "text-AddButton"> {children} </p>
            </div>
      </a>
)

AddButton = connect()(AddButton)

export default AddButton
