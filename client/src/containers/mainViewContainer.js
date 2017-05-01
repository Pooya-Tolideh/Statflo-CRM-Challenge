//mainView
//Type: Container ==> connectst to mainView Component
// fetches what page needs to render from activePage reducer

import { connect }  from 'react-redux'
import MainView     from '../components/mainView.js'

const mapStateToProps = (state) => {
  return {
    pageType: state.activePage.page
  }
}
const MainViewContainer = connect(mapStateToProps)(MainView)

export default MainViewContainer