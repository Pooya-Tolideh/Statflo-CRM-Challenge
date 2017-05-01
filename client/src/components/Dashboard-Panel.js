//Dashboard-Panel.js
//Type: Presentational Component Only
//Holds Tab Menu Header for the Lists
//as well as the lists' panel itself

import React                from 'react'
import TabHeader            from './Dashboard-TabHeader.js'
import PanelListContainer   from '../containers/Dashboard-PanelListContainer.js'
import Paper                from 'material-ui/Paper'
import Divider              from 'material-ui/Divider'

const DashboardPanel = () => {
   return (
      <Paper className = "DashboardPanel">
         <div>
            <TabHeader />
            <PanelListContainer />
         </div>
      </Paper>
   )
}
export default DashboardPanel