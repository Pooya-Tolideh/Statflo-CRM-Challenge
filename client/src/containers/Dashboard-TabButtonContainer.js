//Dashboard-TabButtonContainer
//Type: Redux Container
//Component ==> Daashboard-TabButton
//filter props are injected props 'ACCOUNT','LEAD',etc
//Sets which list is active using filter prop abd activeList Reducer Prop
//Dispatches setListFilter when tab buttons are pressed to fetch the new list


import { connect }       from 'react-redux'
import { setListFilter } from '../actions/index.js'
import TabButton         from '../components/Dashboard-TabButton.js'

const mapStateToProps = (state,ownProps) => {
    return {
        active:   ownProps.filter === state.activeList,
        children: ownProps.children
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onClick: () => {
            dispatch(setListFilter(ownProps.filter))
        }
    }
}

const TabButtonContainer = connect(
      mapStateToProps,
      mapDispatchToProps)(TabButton)

export default TabButtonContainer
