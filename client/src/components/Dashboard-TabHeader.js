//Dashboard-TabHeader.js
//Type: Presentational Component Only
//This component wraps the tab buttons at the blue dashboard menu header
//Tabs are used for switching between different list

import React, { Component }  from 'react'
import TabButtonContainer    from '../containers/Dashboard-TabButtonContainer.js'
import Paper                 from 'material-ui/Paper'

const TabHeader = () => {
   return (
      <div className="TabHeader">
         <div className="SubTabHeader">
            <TabButtonContainer filter = "ACCOUNT">   Accounts       </TabButtonContainer>
            <TabButtonContainer filter = "LEAD">      Leads          </TabButtonContainer>
            <TabButtonContainer filter = "CALL">      Call Logs      </TabButtonContainer>
            <TabButtonContainer filter = "APPT">      Appointments   </TabButtonContainer>
         </div>
      </div>
   )
}
export default TabHeader