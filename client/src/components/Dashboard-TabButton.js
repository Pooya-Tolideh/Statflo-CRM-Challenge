//Dashboard-TabButtons.js
//Type: Presentational Component
//Redux Container ==> Dashboard-TabButtonContainer
//Tab Button changes the list view on the page
//active Prop: comes from activeList reducer. Disables the button if list selected.
//onClick Prop: Triggers the action creator setListFilter


import  React, { PropTypes , Component }   from 'react'
import  FlatButton                         from 'material-ui/FlatButton'
import  { white , blue400 }                from 'material-ui/styles/colors'

 const TabButton = ({ active, children, onClick }) => {

    const Style = {
        div:{
            display: "inline-block",
            float: "left"
        },
        v_1:{
            color: white,
            backgroundColor:"#75BBF4",
            fontSize: 12,
            marginRight: "2%",
            marginLeft:  "2%"
        },
        v_2:{
            color:white,
            backgroundColor: blue400,
            marginRight: "2%",
            marginLeft:  "2%"
        }
    }

    if (active){
        return(
            <div>
                <div style={Style.div}>
                    <FlatButton
                        disabled = {true}
                        label    = {children}
                        style    = {Style.v_1}
                    />
                </div>
            </div>
        )
    }
    return (
        <div>
            <div onClick={e => {
                e.preventDefault()
                onClick()}}
                className = "TButton"
            >
                <FlatButton
                    label = {children}
                    style = {Style.v_2}
                />
            </div>
        </div>
    )
}

 export default TabButton
