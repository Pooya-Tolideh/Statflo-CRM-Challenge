//AddLeadPage
//Type: Container + Component ==> BindActionCreators Method

//Contstuctor will set the initial state to a Lead Object that is null.
//It also sets Modal page state to false
//componentWillMount() launches the page by calling the handler and setting open = true

////render() will set the action buttons,then places the form inside Modal Dialog
//Interacting with input fields will update the state and the value of the the Lead Obj

//if Cancel Button,then window goes back to previous state
//if Save Button, then state value/new lead info is placed inside an array called Submission
//Then submission is dispatched using addToList action
//New lead is then added to our list inside dataBase reducer
// At the end, setPage,setListFilter, and getSnack actions are dispatched
//These will reset the active view to previous state and give feedback on the new lead

import React , {Component}  from 'react'
import { connect }          from 'react-redux'
import {bindActionCreators} from 'redux'
import { addToList , getSnack, setPage , setListFilter} from '../actions/index.js'
import CancelButton      from './CancelButton.js'
import SaveButton        from '../components/SaveButton.js'
import AddTextField      from '../components/AddTextField.js'
import Dialog            from 'material-ui/Dialog'

class AddLeadPage extends Component {

    constructor (props) {
        super(props);
        this.state = {
            firstName:"",
            lastName: "",
            phone:"",
            email:"",
            company:"",
            industry:"",
            city:"",
            type:'LEAD',
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
                        const submission = [this.state]
                        if (submission[0].firstName === "") {
                            submission[0].firstName = "---"
                        }
                        this.props.addToList(submission,'LEAD')
                        this.props.setPage({page:'OPEN_DASHBOARD'})
                        this.props.setListFilter((this.props.activeList))
                        this.props.getSnack('New Lead was Added')}}

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
                    <div>
                        <h1 className = "formHeading">Add a New Lead</h1>
                    </div>
                    <div className = "body-add-lead">
                        <div className = "Div_1">
                            <AddTextField
                                value    = {this.state.firstName}
                                Label    = "firstName"
                                onChange = {(e)=>this.setState({firstName:e.target.value}) }
                             />
                            <AddTextField
                                value    = {this.state.lastName}
                                onChange = {(e)=>this.setState({lastName:e.target.value}) }
                                Label    ="Last Name"
                             />
                            <AddTextField
                                value    = {this.state.phone}
                                onChange = {(e)=>this.setState({phone:e.target.value}) }
                                Label    ="Phone Number"
                             />
                            <AddTextField
                                value    = {this.state.email}
                                onChange = {(e)=>this.setState({email:e.target.value}) }
                                Label    ="Email Address"
                             />

                        </div>
                        <div className = "Div_2">
                            <AddTextField
                                value    = {this.state.company}
                                onChange = {(e)=>this.setState({company:e.target.value}) }
                                Label    ="Company Name"
                             />
                            <AddTextField
                                value    = {this.state.industry}
                                onChange = {(e)=>this.setState({industry:e.target.value}) }
                                Label    = "Industry"
                             />
                            <AddTextField
                                value    = {this.state.city}
                                onChange = {(e)=>this.setState({city:e.target.value}) }
                                Label    ="City"
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
        getSnack: getSnack,
        setPage: setPage,
        setListFilter:setListFilter} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLeadPage);

