//EditLeadPage
//Type: Container + Component ==> BindActionCreators Method

//Contstuctor will set the initial state to a Lead Object that is null
//It also sets Modal page state to false
//componentWillMount() launches the page by calling the handler and setting open = true

//componnentDidMount() will updates the state and Lead Object with the chosen Lead that was clicked on
//list prop: is the most current list that was rendered through dataBase reducer
//dataID prop: comes from the activePage reducer only when 'EDIT_INFO' is dispatched

////render() will then place the form with default values inside Modal Dialog.
//Interacting with input fields will update the state and the value of the the Lead Obj

//if Cancel Button,then window goes back to previous state
//if Save Button, then state value/new lead info is placed inside an array called 'update'
//Then update value is dispatched using updateList action
//New lead is then updated inside dataBase reducer
// At the end, setPage,setListFilter, and getSnack actions are dispatched.
//These will reset the active view to previous state and give feedback on the updates

//Convert Lead Button: This will dispatch an action through convertLead()
//This action switches 'type' of the current Leadfrom 'LEAD' to 'ACCOUNT'
//That way it no longer appears under the  'Leads' tab

import React , {Component}  from 'react'
import { connect }          from 'react-redux'
import {bindActionCreators} from 'redux'
import { updateList , convertLead , getSnack, setPage , setListFilter } from '../actions/index.js'
import CancelButton  from './CancelButton.js'
import ConvertButton from '../components/ConvertButton.js'
import EditTextField from '../components/EditTextField.js'
import SaveButton    from '../components/SaveButton.js'
import TextField     from 'material-ui/TextField'
import Dialog        from 'material-ui/Dialog'

import {grey700,blue500} from 'material-ui/styles/colors'

class EditLeadPage extends Component {

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
                firstName:data.firstName,
                lastName:data.lastName,
                phone:data.phone,
                email:data.email,
                company:data.company,
                industry:data.industry,
                city:data.city,
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
                        this.props.updateList(update,'LEAD')
                        this.props.setPage({page:'OPEN_DASHBOARD'})
                        this.props.setListFilter((this.props.activeList))
                        this.props.getSnack('Lead has been updated')}}

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
                                {`${this.state.firstName} ${this.state.lastName}`}
                            </h1>
                            <h4> {`Status: ${this.state.type}`} </h4>
                            <ConvertButton
                                style = {{marginTop:20}}
                                onClick={() => {
                                    this.props.convertLead(this.state.id)
                                    this.props.setPage({page:'OPEN_DASHBOARD'})
                                    this.props.setListFilter((this.props.activeList))
                                    this.props.getSnack('Congradulations - Lead was successfully converted into account!')
                                }}
                            />
                    </div>
                    <div className="formRow">
                        <div className = "Div_1">
                            <EditTextField
                                value    = {this.state.firstName}
                                Label    = "firstName"
                                onChange = {(e)=>this.setState({firstName:e.target.value}) }
                             />
                            <EditTextField
                                value    = {this.state.lastName}
                                onChange = {(e)=>this.setState({lastName:e.target.value}) }
                                Label    ="Last Name"
                             />
                            <EditTextField
                                value    = {this.state.phone}
                                onChange = {(e)=>this.setState({phone:e.target.value}) }
                                Label    ="Phone Number"
                             />
                            <EditTextField
                                value    = {this.state.email}
                                onChange = {(e)=>this.setState({email:e.target.value}) }
                                Label    ="Email Address"
                             />

                        </div>
                        <div className = "Div_2">
                            <EditTextField
                                value    = {this.state.company}
                                onChange = {(e)=>this.setState({company:e.target.value}) }
                                Label    ="Company Name"
                             />
                            <EditTextField
                                value    = {this.state.industry}
                                onChange = {(e)=>this.setState({industry:e.target.value}) }
                                Label    = "Industry"
                             />
                            <EditTextField
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
        activeList: state.activeList,
        list:       state.dataBase.list,
        dataID:     state.activePage.id
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
              updateList: updateList,
              convertLead:convertLead,
              getSnack:   getSnack,
              setPage:    setPage,
              setListFilter: setListFilter} , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLeadPage)
