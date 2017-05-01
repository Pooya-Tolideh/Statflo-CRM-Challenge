//AddAppointmentsPage
//Type: Container + Component ==> BindActionCreators Method

//Contstuctor will set the initial state to a Appt Object that is null.
//It also sets Modal page state to false
//componentWillMount() launches the page by calling the handler and setting open = true

//render() will set the action buttons,then places the form inside Modal Dialog
//Interacting with input fields will update the state and the value of Call Obj

//if Cancel Button,then window goes back to previous state
//if Save Button, then state value/new Appt info is placed inside an array called Submission
//Then submission is dispatched using addToList action
//New lead is then added to our list inside dataBase reducer
// At the end, setPage,setListFilter, and getSnack actions are dispatched
//These will reset the active view to previous state and give feedback on the new lead

import React , {Component}   from 'react'
import { connect }           from 'react-redux'
import {bindActionCreators}  from 'redux'
import { addToList , getSnack, setPage , setListFilter } from '../actions/index.js'
import CancelButton   from './CancelButton.js'
import SaveButton     from '../components/SaveButton.js'
import AddTextField   from '../components/AddTextField.js'
import TimePicker     from 'material-ui/TimePicker'
import DropDownMenu   from 'material-ui/DropDownMenu'
import MenuItem       from 'material-ui/MenuItem'
import DatePicker     from 'material-ui/DatePicker'
import Dialog         from 'material-ui/Dialog'


class AddApptPage extends Component {


constructor (props) {
    super(props);
    this.state={
           date:"---",
           time:"---",
           name:"",
           duration:"15 min",
           email:"",
           phone:"",
           hovered:false,
           open:false
    }
}

componentWillMount() {
    this.handleOpen()
}

handleOpen = () => {
    this.setState({open: true})
}


render(){
    const actions = [
            <SaveButton onClick = {e => {
                e.preventDefault()
                const x = this.state
                console.log(x)
                const submission = [this.state]
                this.props.addToList(submission,'APPT')
                this.props.setPage({page:'OPEN_DASHBOARD'})
                this.props.setListFilter((this.props.activeList))
                this.props.getSnack('New Appointment was Added to Your Calendar')
              }}
            />,
          <CancelButton activeList={this.props.activeList}/>
      ]

  return (
      <div>
         <Dialog
             actions = {actions}
             modal   = {false}
             open    = {this.state.open}
             onRequestClose={this.handleClose}
             style   = {{height:"auto"}}
         >
            <div>
               <h1 className="formHeading">Schedule a New Appointment</h1>
            </div>
            <div className = "body-add-appt">
              <div className = "Div_1">
                  <div className = "formSpacing">
                     <p className = " inlineIT formLabel">Set Duration</p>
                     <DropDownMenu
                         className = "inlineIT"
                         value     = {this.state.duration}
                         onChange  = {(event,index,value) => this.setState({duration:value})}
                     >
                       <MenuItem key = {1} value = {"15 min"}  primaryText = "15 min"/>
                       <MenuItem key = {2} value = {"30 min"}  primaryText = "30 min"/>
                       <MenuItem key = {3} value = {"1 hour"}  primaryText = "1 hour"/>
                     </DropDownMenu>
                  </div>
                  <div className = "formSpacing">
                    <p className = "formLabel">Set Date</p>
                    <DatePicker
                      hintText = {`Date: ${this.state.date}`}
                      onChange = {(event,value) => this.setState({date:value.toLocaleDateString()})}
                    />
                  </div>
                  <div className = "formSpacing">
                     <p className = "formLabel">Set Time </p>
                     <TimePicker
                      hintText = {`Start Time: ${this.state.time}`}
                      onChange = {(event,value) => this.setState({time: value.toLocaleTimeString()})}
                     />
                  </div>
                </div>
                <div className="Div_2">
                  <AddTextField
                     value = {this.state.name}
                     Label = "Name"
                     onChange = {(e)=>this.setState({name:e.target.value}) }
                   />
                  <AddTextField
                     value = {this.state.email}
                     Label = "email"
                     onChange = {(e)=>this.setState({email:e.target.value}) }
                  />
                  <AddTextField
                     value = {this.state.phone}
                     Label = "phone"
                     onChange = {(e)=>this.setState({phone:e.target.value}) }
                  />
              </div>
            </div>
         </Dialog>
      </div>
   )
}
}

const mapStateToProps = (state) => {
  return {
    activeList: state.activeList
  }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
      addToList: addToList,
      getSnack:  getSnack,
      setPage:   setPage,
      setListFilter:setListFilter} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddApptPage);
