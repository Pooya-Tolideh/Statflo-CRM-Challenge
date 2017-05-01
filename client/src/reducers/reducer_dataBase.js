//MAIN REDUCER

//IState: is the database iteself
//List: is a list of items extracted from IState that application uses during its dashboard renderings
//List was created to hold the active lists in the memory instead of creating it in containers

import dataHolder from './fakeData.js'

const dataBase = (state = null, action) => {
    console.log(dataHolder.contacts[0])
    let IState
    let list =[]
    let id


    if (!state) {
        //creating default IState and action
        action = {type:"GET_LIST",filter:"ACCOUNT"}
        IState = {
            contacts: dataHolder.contacts,
            calls: dataHolder.calls,
            appointments: dataHolder.appointments
        }
    }
    else {
        IState = Object.assign({},state.IState)
    }


    //fetching items from Database for a specific list
    const mapList = (IState,action) => {
        switch (action.filter) {

            case 'LEAD':
                return IState.contacts.filter(contact => contact.type ==='LEAD')

            case 'CALL':
                return IState.calls

            case 'APPT':
                return IState.appointments

            default:
                return IState.contacts.filter(contact => contact.type ==='ACCOUNT')
        }

    }

    //adds the new item to its relevant list
    //first adds a new id based on length of the current list
    //then concat the array into the existing one
    const addSubmission = (IState,action) => {
        switch (action.filter) {
            case 'LEAD':
                action.submission[0].id = IState.contacts.length+1
                IState.contacts = IState.contacts.concat(action.submission)
                return

            case 'CALL':
                action.submission[0].id = IState.calls.length+1
                IState.calls = IState.calls.concat(action.submission)
                return

            case 'APPT':
                action.submission[0].id = IState.appointments.length+1
                console.log(action.submission)
                IState.appointments = IState.appointments.concat(action.submission)
                return
            default:
                return
        }
    }

    //Updates the current list based on the edits applied to a specific item inside it
    const addUpdates = (IState,action) => {
        let box = action.update[0] //grabbing obj from inside the passed array
        switch (action.filter) {
            case 'LEAD':
                IState.contacts = IState.contacts.map(contact => {
                    if(box.id === contact.id){ //only updating the item whose id matches
                            contact = {
                                firstName:box.firstName,
                                lastName:box.lastName,
                                phone:box.phone,
                                email:box.email,
                                company:box.company,
                                industry:box.industry,
                                city:box.city,
                                type:box.type,
                                hovered:box.hovered,
                                id: box.id
                            }
                        }
                        return contact
                    })
                return IState.contacts.filter(contact => contact.type ==='LEAD')

            case 'CALL':
                IState.calls = IState.calls.map(call => {
                    if(box.id === call.id){
                        call = {
                            subject:box.subject,
                            type:box.type,
                            fromORto:box.fromORto,
                            person:box.person,
                            date:box.date,
                            start:box.start,
                            finish:box.finish,
                            result:box.result,
                            hovered:false,
                            id: box.id
                        }
                    }
                    return call
                })
                return IState.calls

            case 'APPT':
                IState.appointments = IState.appointments.map(appt => {
                    if(box.id === appt.id){
                        appt = {
                            date:box.date,
                            time:box.time,
                            name:box.name,
                            duration:box.duration,
                            email:box.email,phone:box.phone,
                            hovered:false, id: box.id
                        }
                    }
                    return appt
                })
                return IState.appointments

            default:
                IState.contacts = IState.contacts.map(contact => {
                    if(box.id === contact.id){ //only updating the item whose id matches
                            contact = {
                                firstName:box.firstName,
                                lastName:box.lastName,
                                phone:box.phone,
                                email:box.email,
                                company:box.company,
                                industry:box.industry,
                                city:box.city,
                                type:box.type,
                                hovered:box.hovered,
                                id: box.id
                            }
                        }
                        return contact
                    })
                return IState.contacts.filter(contact => contact.type ==='ACCOUNT')
        }
    }


    switch(action.type) {

        case 'ADD_TO':
            addSubmission(IState,action)
            list = state.list
            return Object.assign({},{IState},{list})

        case 'TOGGLE_ON':
            //grabs visible list from state
            //toggles 'hover' property of a specific item that mouse is on
            //returns the new list
            list = state.list.map( data => {
                if(data.id === action.rowId){
                    data.hovered = !data.hovered
                }
                return data})
            return Object.assign({},{IState},{list})

        //
        case 'CONVERT_LEAD':
            //grabs visible the list from the state
            //toggles 'type' property of a specific item that is selected
            //returns the new list
            list = state.list.map(contact => {
                    if(action.rowId === contact.id){
                        contact.type = 'ACCOUNT'
                    }
                    return contact
                })
            return Object.assign({},{IState},{list})

        case 'EDIT_INFO':
            //no changes to dataBase
            list = state.list
            return Object.assign({},{IState},{list})

        case 'SNACK_BAR':
            //no changes to dataBase
            list = state.list
            return Object.assign({},{IState},{list})

        case 'UPDATE_LIST':
            addUpdates(IState,action)
            list = mapList(IState,action)
            return Object.assign({},{IState},{list})

        default:
            list= mapList(IState,action)
            return Object.assign({},{IState},{list})


    }
}

export default dataBase
