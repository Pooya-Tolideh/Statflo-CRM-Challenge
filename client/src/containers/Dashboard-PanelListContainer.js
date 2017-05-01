//Dashboard-PanelListContainer.
//Type: Container

// visibleList: list content in an array
// visibleType: list type
// onRowHover: dispatches toggleHover to toggle 'hovered' property of a sepecific row item
// onEditClick: first resets the 'hovered' property of the row item
//next dispatches editInfo to fetch the Edit Page for that row item

import { connect } from 'react-redux'
import PanelList   from '../components/Dashboard-PanelList.js'
import {
    toggleHover,
    convertLead,
    setListFilter,
    editInfo, setPage,
    snackStat
    } from '../actions/index.js'


const mapStateToProps = (state) => {
    return {
        visibleType: state.activeList,
        visibleList: state.dataBase.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRowHover: (rowId) => dispatch(toggleHover(rowId)),
        onEditClick: (rowId,activeList) => {
            dispatch(toggleHover(rowId))
            dispatch(editInfo(rowId,activeList))
        }
    }
}

const PanelListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PanelList)

export default PanelListContainer

