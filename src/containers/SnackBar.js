//SnackBar
//Type: Container + Component ==> BindActionCreators Method
//Snack Bar provides feedback when an item is edited or added
//message and the on/off status of snack bar is fetched through snackStat reducer

import React , { Component } from 'react'
import { connect }  from 'react-redux'
import Snackbar     from 'material-ui/Snackbar'


class SnackBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render(){
      return (
        <div>
             <Snackbar
              open = {this.props.snackStat.id}
              autoHideDuration = {10000}
              message = {this.props.snackStat.msg}
            />
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    snackStat: state.snackStat
  }
}

export default connect(mapStateToProps)(SnackBar)
