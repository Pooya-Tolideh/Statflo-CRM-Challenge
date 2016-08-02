//mainView
//Type: Presentational Component ==> Container: mainViewContainer
//It decides which page needs to render

import React            from 'react'
import DashboardPage    from './DashboardPage.js'
import AddLeadPage      from '../containers/AddLeadPage.js'
import AddCallPage      from '../containers/AddCallPage.js'
import AddApptPage      from '../containers/AddAppointmentsPage.js'
import EditLeadPage     from '../containers/EditLeadPage.js'
import EditCallPage     from '../containers/EditCallPage.js'
import EditApptPage     from '../containers/EditApptPage.js'
import EditAccountPage  from '../containers/EditAccountPage.js'


const MainView = ({pageType}) => {

    const getView = () => {
        switch (pageType) {
            case 'OPEN_ADD_CALL':
                return <AddCallPage />
            case 'OPEN_ADD_LEAD':
                return <AddLeadPage />
            case 'OPEN_ADD_APPT':
                return <AddApptPage />
            case 'OPEN_CALL':
                return <CallPage />
            case 'OPEN_LEAD':
                return <LeadPage />
            case 'OPEN_APPT':
                return <ApptPage />
            case 'OPEN_EDIT_CALL':
                return <EditCallPage />
            case 'OPEN_EDIT_LEAD':
                return <EditLeadPage />
            case 'OPEN_EDIT_APPT':
                return <EditApptPage />
            case 'OPEN_EDIT_ACCOUNT':
                return <EditAccountPage />
            default:
                return <DashboardPage />
        }
    }

    return (
        <div>
             {getView()}
        </div>
    )
}
export default MainView