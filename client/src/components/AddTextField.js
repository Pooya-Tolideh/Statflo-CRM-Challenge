//AddTextField
//Type: Presentational Component with state update dependability
//It is essentially an input field

import React from 'react'
import TextField from 'material-ui/TextField'
import {lightBlueA400,grey700} from 'material-ui/styles/colors'

const AddTextField = ({value,onChange,Label}) => {
    const Style = {color:lightBlueA400}
    return (
        <div>
            <TextField
                value = {value}
                onChange = {onChange}
                floatingLabelText={Label}
                floatingLabelStyle = {Style}
                textareaStyle = {{color:grey700}}
             />
        </div>

  )
}

 export default AddTextField