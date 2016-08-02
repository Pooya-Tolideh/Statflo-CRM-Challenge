//ConvertButton
//Type: Presentational Component



import React            from 'react'
import FlatButton       from 'material-ui/FlatButton'
import FontIcon         from 'material-ui/FontIcon'
import {grey50,blue500} from 'material-ui/styles/colors'

let ConvertButton = ({onClick}) => {
    return (
        <div onClick = { onClick}>
            <FlatButton
                label = "Convert"
                backgroundColor = {blue500}
                style = {{color:grey50}}
                icon  = {
                    <FontIcon
                        className = "material-icons"
                        color     = {grey50}
                    >
                      exit_to_app
                    </FontIcon>
                }
            />
        </div>
    )
}

export default ConvertButton