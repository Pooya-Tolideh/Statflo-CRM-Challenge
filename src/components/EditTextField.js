//EditTextField
//Type: Presentational Component
//Text field specifically designed for Edit Pages
// toggles the hovering label on/off based on status of editing

import React from 'react'
import TextField from 'material-ui/TextField'
import {lightBlue700,grey700} from 'material-ui/styles/colors'

const EditTextField = ({value,onChange,Label,disabled}) => {
    const Style = {color:lightBlue700}
    let  status = disabled ? true : false
    return (
        <div>
            <TextField
                value    = {value}
                onChange = {onChange}
                hintText = {Label}
                floatingLabelText   = {Label}
                floatingLabelFixed  = {true}
                floatingLabelStyle  = {Style}
                textareaStyle = {{color:grey700}}
                underlineFocusStyle = {{color:lightBlue700}}
                disabled = {status}
             />
        </div>
  )
}
export default EditTextField