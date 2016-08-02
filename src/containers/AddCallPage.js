//AddCallPage
//Type: Container + Component ==> BindActionCreators Method

//Contstuctor will set the initial state to a Call Object that is null.
//It also sets Modal page state to false
//componentWillMount() launches the page by calling the handler and setting open = true

//render() will set the action buttons,then places the form inside Modal Dialog
//Interacting with input fields will update the state and the value of Call Obj

//if Cancel Button,then window goes back to previous state
//if Save Button, then state value/new lead info is placed inside an array called Submission
//Then submission is dispatched using addToList action
//New lead is then added to our list inside dataBase reducer
// At the end, setPage,setListFilter, and getSnack actions are dispatched
//These will reset the active view to previous state and give feedback on the new lead


import React , {Component}  from 'react'
import { connect }          from 'react-redux'
import {bindActionCreators} from 'redux'
import { addToList , getSnack, setPage , setListFilter } from '../actions/index.js'
import CancelButton  from './CancelButton.js'
import SaveButton    from '../components/SaveButton.js'
import AddTextField  from '../components/AddTextField.js'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import TimePicker    from 'material-ui/TimePicker'
import DropDownMenu  from 'material-ui/DropDownMenu'
import MenuItem      from 'material-ui/MenuItem'
import DatePicker    from 'material-ui/DatePicker'
import Dialog        from 'material-ui/Dialog'


class AddCallPage extends Component {

constructor (props) {
    super(props);
    this.state = {
          subject:"",
          type:"Negotiation",
          fromORto:"To",
          hovered:false,
          person:"",
          date:"---",
          start:"---",
          finish:"---",
          result:"",
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
        <SaveButton onClick={e => {
            e.preventDefault()
            const x = this.state
            console.log(x)
            const submission = [this.state]
            this.props.addToList(submission,'CALL')
            this.props.setPage({page:'OPEN_DASHBOARD'})
            this.props.setListFilter((this.props.activeList))
            this.props.getSnack('New call was Logged')
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
                  <h1 className = "formHeading">Log a New Call</h1>
              </div>
              <div className = "body-add-call">
                <div className="Div_1">
                    <AddTextField
                      value = {this.state.subject}
                      Label = "Subject"
                      onChange = {(e)=>this.setState({subject:e.target.value}) }
                    />
                     <div className="formSpacing">
                         <div><p className="inlineIT formLabel"> Set Call Type </p></div>
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
                          style = {{marginTop:10}}
                          name  = "From/To"
                          defaultSelected = "To"
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
                      <AddTextField
                        value = {this.state.person}
                        Label = "Name"
                        onChange = {(e)=>this.setState({person:e.target.value}) }
                     />
                    </div>
                     <AddTextField
                            value     = {this.state.result}
                            multiLine = {true}
                            onChange  = {(e)=>this.setState({result:e.target.value}) }
                            Label     ="Call Results"
                         />
                    </div>
                    <div className = "Div_2">
                      <div className="formSpacing">
                         <p className = "formLabel formLabel">Set Duration</p>
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
                          <p className = "formLabel formLabel">Set Date</p>
                          <DatePicker
                            hintText = {`Date: ${this.state.date}`}
                            onChange = {(event,value) => this.setState({date:value.toLocaleDateString()})}
                          />
                        </div>
                    <div>
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
    activeList: state.activeList
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      addToList:  addToList,
      getSnack:   getSnack,
      setPage:    setPage,
      setListFilter:setListFilter} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCallPage)



