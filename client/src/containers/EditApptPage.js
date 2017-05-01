//EditApptPage
//Type: Container + Component ==> BindActionCreators Method

//Contstuctor will set the initial state to a Appointment Object that is null
//It also sets Modal page state to false
//componentWillMount() launches the page by calling the handler and setting open = true

//componnentDidMount() will updates the state and Appointment Object with the chosen Appointment that was clicked on
//list prop: is the most current list that was rendered through dataBase reducer
//dataID prop: comes from the activePage reducer only when 'EDIT_INFO' is dispatched

////render() will then place the form with default values inside Modal Dialog.
//Interacting with input fields will update the state and the value of the the Appointment Obj

//if Cancel Button,then window goes back to previous state
//if Save Button, then state value/new appointment info is placed inside an array called 'update'
//Then update value is dispatched using updateList action
//New Appointment is then updated inside dataBase reducer
// At the end, setPage,setListFilter, and getSnack actions are dispatched.
//These will reset the active view to previous state and give feedback on the updates


import React , {Component}  from 'react'
import { connect }          from 'react-redux'
import {bindActionCreators} from 'redux'
import { updateList , convertLead , getSnack, setPage , setListFilter } from '../actions/index.js'
import CancelButton  from './CancelButton.js'
import EditTextField from '../components/EditTextField.js'
import SaveButton    from '../components/SaveButton.js'
import TextField     from 'material-ui/TextField'
import Dialog        from 'material-ui/Dialog'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import TimePicker from 'material-ui/TimePicker'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'


class EditApptPage extends Component {

    constructor (props) {
        super(props);
        this.state={
                 date:"---",
                 time:"---",
                 name:"",
                 duration:"",
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

    componentDidMount() {
        let {list,dataID} = this.props
        if(!this.state.id){
            let data
            list.map(d => {
                if (d.id === dataID) {
                    data = Object.assign({},d)
                }
                return d
            })
            this.setState({
                date:data.date,
                time:data.time,
                name:data.name,
                duration:data.duration,
                email:data.email,
                phone:data.phone,
                hovered:false,
                id: data.id
            })
        }
    }

    render() {
        const actions = [
            <SaveButton onClick = {e => {
                        e.preventDefault()
                        const update = [this.state]
                        this.props.updateList(update,'APPT')
                        this.props.setPage({page:'OPEN_DASHBOARD'})
                        this.props.setListFilter((this.props.activeList))
                        this.props.getSnack('Call has been updated')}}

            />,
            <CancelButton activeList={this.props.activeList}/>
        ]

        return (
            <div>
                <Dialog
                    actions = {actions}
                    modal   = {false}
                    open    = {this.state.open}
                    onRequestClose = {this.handleClose}
                    style   = {{height:"auto"}}
                >
                    <div className="formRow">
                        <h3>{"Appointment with: "}</h3>
                        <h1 className = "formHeading">
                            {this.state.name}
                        </h1>
                        <h5> {`Date: ${this.state.date}`} </h5>
                    </div>
                    <div className = "body-add-appt">
                        <div className = "Div_1">
                            <div className = "formSpacing">
                                 <p className = " inlineIT formLabel">Duration</p>
                                 <DropDownMenu
                                     value     = {this.state.duration}
                                     onChange  = {(event,index,value) => this.setState({duration:value})}
                                 >
                                   <MenuItem key = {2} value = {"15 min"}  primaryText = "15 min"/>
                                   <MenuItem key = {3} value = {"30 min"}  primaryText = "30 min"/>
                                   <MenuItem key = {4} value = {"1 hour"}  primaryText = "1 hour"/>
                                 </DropDownMenu>
                            </div>
                            <div className = "formSpacing">
                                <p className = "formLabel">Date</p>
                                <DatePicker
                                      hintText = {`Date: ${this.state.date}`}
                                      onChange = {(event,value) => this.setState({date:value.toLocaleDateString()})}
                                />
                            </div>
                            <div className = "formSpacing">
                                 <p className = "formLabel">Time </p>
                                 <TimePicker
                                  hintText = {`Start Time: ${this.state.time}`}
                                  onChange = {(event,value) => this.setState({time: value.toLocaleTimeString()})}
                                 />
                            </div>
                        </div>
                        <div className="Div_2">
                            <EditTextField
                                 value = {this.state.name}
                                 Label = "Name"
                                 onChange = {(e)=>this.setState({name:e.target.value}) }
                            />
                            <EditTextField
                                 value = {this.state.email}
                                 Label = "email"
                                 onChange = {(e)=>this.setState({email:e.target.value}) }
                            />
                            <EditTextField
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
    activeList: state.activeList,
    list:       state.dataBase.list,
    dataID:     state.activePage.id
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      updateList:   updateList,
      getSnack:     getSnack,
      setPage:      setPage,
      setListFilter:setListFilter} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditApptPage)