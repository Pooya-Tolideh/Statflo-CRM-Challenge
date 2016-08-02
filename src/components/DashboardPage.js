//Type: Presentational Component Only
//Dashboard Page holds the Dashboard elements such as the table panel
// and Navigation Action Menu (DashboardMenu)

import React           from  'react'
import DashboardMenu   from  './dashboard-Menu.js'
import DashboardPanel  from  './Dashboard-Panel.js'
import SnackBar        from  '../containers/SnackBar.js'
import {blueGrey100}   from  'material-ui/styles/colors'

const DashboardPage = () => {
    return (
        <div className = "DashboardPage">
             <SnackBar />
             <DashboardMenu />
             <DashboardPanel />
        </div>
   )
}
export default DashboardPage

