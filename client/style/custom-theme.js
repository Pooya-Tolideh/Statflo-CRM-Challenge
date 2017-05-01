//Customizing Material UI objects

//Activate these imports if needed:
/*import zIndex from 'material-ui/styles/zIndex';
import autoprefixer from 'material-ui/utils/autoprefixer';
import callOnce from 'material-ui/utils/callOnce';
import rtl from 'material-ui/utils/rtl';
import typography from 'material-ui/styles/typography';*/
//

import {darken, fade, emphasize, lighten} from 'material-ui/utils/colorManipulator';
import {white, blue500,blueGrey300,lightBlueA400,lightBlueA200} from 'material-ui/styles/colors';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default  getMuiTheme({

        tableRow: {stripeColor:fade(lighten(blue500, 0.9), 0.4)},

        tableHeaderColumn:{
            textColor:blueGrey300,
            height:20
        },

        textField:{
            focusColor:blueGrey300,
            borderColor:blueGrey300
        },

        radioButton:{
            labelColor:lightBlueA400,
            checkedColor:lightBlueA400,
            textColor: lightBlueA400,
            selectColor: lightBlueA200
        },

        timePicker: {
            color:lightBlueA400,
            clockColor:lightBlueA400,
            headerColor: lightBlueA400,
            selectColor: lightBlueA200,
            selectTextColor: lightBlueA200,
            accentColor: lightBlueA200,
            headerColor: lightBlueA400
        },

        datePicker: {
            color: lightBlueA400,
            selectColor: lightBlueA200,
            selectTextColor: white
        },

        dropDownMenu: {accentColor: lightBlueA400}
    }
)




