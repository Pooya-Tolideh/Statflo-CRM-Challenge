//EditCallPage
//Type: Container + Component ==> BindActionCreators Method

//Contstuctor will set the initial state to a Call-Log Object that is null
//It also sets Modal page state to false
//componentWillMount() launches the page by calling the handler and setting open = true

//componnentDidMount() will updates the state and Call-Log Object with the chosen Call-Log that was clicked on
//list prop: is the most current list that was rendered through dataBase reducer
//dataID prop: comes from the activePage reducer only when 'EDIT_INFO' is dispatched

////render() will then place the form with default values inside Modal Dialog.
//Interacting with input fields will update the state and the value of the the Call-Log Obj

//if Cancel Button,then window goes back to previous state
//if Save Button, then state value/new call info is placed inside an array called 'update'
//Then update value is dispatched using updateList action
//New Call-Log is then updated inside dataBase reducer
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

class EditCallPage extends Component {

    constructor (props) {
      super(props);
      this.state = {
            subject:"",
            type:"Negotiation",
            fromORto:"",
            hovered:false,
            person:"",
            date:"---",
            start:"---",
            finish:"---",
            result:"",
            id:null,
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
                subject:data.subject,
                type:data.type,
                fromORto:data.fromORto,
                person:data.person,
                date:data.date,
                start:data.start,
                finish:data.finish,
                result:data.result,
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
                        this.props.updateList(update,'CALL')
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
                        <h1 className = "formHeading">
                            {this.state.subject}
                        </h1>
                        <h4> {`Tag: ${this.state.type}`} </h4>
                    </div>
                    <div className="body-call">
                         <div className="Div_1">
                            <EditTextField
                              value = {this.state.subject}
                              Label = "Subject"
                              onChange = {(e)=>this.setState({subject:e.target.value}) }
                            />
                            <div className="formSpacing">
                                 <div>
                                    <p className="inlineIT formLabel"> Call Type </p>
                                 </div>
                                 <div className = "inlineIT">
                                    <DropDownMenu
                                        value    = {this.state.type}
                                        onChange = {(event,index,value) => this.setState({type:value})}
                                    >
                                      <MenuItem key ={2} value={"Administrative"}    primaryText="Administrative" />
                                      <MenuItem key ={3} value={"Negotiation"}       primaryText="Negotiation"    />
                                      <MenuItem key ={4} value={"Demo"}              primaryText="Demo"           />
                                      <MenuItem key ={5} value={"Project"}           primaryText="Project"        />
                                      <MenuItem key ={6} value={"Support"}           primaryText="Support"        />
                                    </DropDownMenu>
                                </div>
                            </div>
                            <div className="formSpacing">
                                <RadioButtonGroup
                                      name  = "From/To"
                                      defaultSelected = {this.state.fromORto}
                                      onChange = {(event,value) => this.setState({fromORto:value})}
                                >
                                    <RadioButton
                                      value = "From"
                                      label = "From"
                                    />
                                    <RadioButton
                                      value = "To"
                                      label = "To"
                                    />
                                </RadioButtonGroup>
                                <EditTextField
                                    value = {this.state.person}
                                    Label = "Name"
                                    onChange = {(e)=>this.setState({person:e.target.value}) }
                                />
                            </div>
                            <EditTextField
                                    value     = {this.state.result}
                                    multiLine = {true}
                                    onChange  = {(e)=>this.setState({result:e.target.value}) }
                                    Label     ="Call Results"
                            />
                        </div>
                        <div className = "Div_2">
                            <div className="formSpacing">
                                <p className = "formLabel formLabel">Duration</p>
                                <div>
                                    <p> Start </p>
                                    <TimePicker
                                      hintText = {`Start Time: ${this.state.start}`}
                                      onChange = {(event,value) => this.setState({start: value.toLocaleTimeString()})}
                                    />
                                </div>
                                <div className="formSpacing">
                                    <p> Finish </p>
                                    <TimePicker
                                      hintText = {`Finish Time: ${this.state.finish}`}
                                      onChange = {(event,value) => this.setState({finish: value.toLocaleTimeString()})}
                                    />
                                </div>
                            </div>
                            <div className="formSpacing">
                                    <p className = "formLabel formLabel">Date</p>
                                    <DatePicker
                                    hintText = {`Date: ${this.state.date}`}
                                    onChange = {(event,value) => this.setState({date:value.toLocaleDateString()})}
                                    />
                            </div>
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
      updateList: updateList,
      getSnack:   getSnack,
      setPage:    setPage,
      setListFilter:setListFilter} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCallPage)