//dashboard-Menu
//Type: Presentational Component Only
//Holds Dashboard-AddButton
//Add Call, Add Lead, and Add Appointments page
//goTo: prop for dispatch
//icon: prop for Material-Ui icons

import React     from 'react';
import Paper     from 'material-ui/Paper'
import AddButton from '../containers/Dashboard-AddButton.js';

const DashboardMenu = () => {

   return(
      <Paper zDepth={1} rounded={true} className="DashboardMenu">

               <AddButton
                  goTo = "OPEN_ADD_LEAD"
                  icon = "person_add">
                  Add Leads
               </AddButton>
               <AddButton
                  goTo = "OPEN_ADD_CALL"
                  icon = "perm_phone_msg"
                  className = "AddButton">
                  Add Calls
               </AddButton>
               <AddButton
                  goTo = "OPEN_ADD_APPT"
                  icon = "event"
                  className = "AddButton">
                  Add Appointments
               </AddButton>
      </Paper>
   )
}
export default DashboardMenu;

