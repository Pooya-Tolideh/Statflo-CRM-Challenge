//Dashboard-PanelRow
//Type: Presentational Component
//This component creates the Table body and lists inside it
//getRow() first Launches a switch statement to determine what type of list needs to be created
// Then it maps 'list' to fetch the content inside it
//if the item inside has 'hovered' property, it sets the last cell in the row to <EditButton />
//Then it creates the lists and the content in the cells
//At the end rows are placed back inside TableBody which will be returned to PanelList


import React, { PropTypes , Component }         from 'react'
import { TableBody,TableRow, TableRowColumn }   from 'material-ui/Table'
import EditButton                               from './EditButton.js'

 const PanelRow = ({onRowHover,list,listType,onEditClick}) => {
    let editMenu
    const getRow = () => {
        switch (listType) {

            case 'ACCOUNT':
                return (
                    list.map(data => {
                        if (data.hovered) {
                            editMenu = <EditButton onClick={() => onEditClick(data.id,listType)}/>
                        }
                        else { editMenu = <span></span> }
                        return(
                            <TableRow
                                selectable   = {false}
                                key          = {data.id}
                                onMouseEnter = {() => onRowHover(data.id)}
                                onMouseLeave = {() => onRowHover(data.id)}
                            >
                                <TableRowColumn>  {`${data.firstName}  ${data.lastName}`}  </TableRowColumn>
                                <TableRowColumn>  {data.company}                           </TableRowColumn>
                                <TableRowColumn>  {data.phone}                             </TableRowColumn>
                                <TableRowColumn>  {data.email}                             </TableRowColumn>
                                <TableRowColumn>  {data.city}                              </TableRowColumn>
                                <TableRowColumn className = "editButton">
                                    {editMenu}
                                </TableRowColumn>
                            </TableRow>
                        )
                    })
                )

            case 'LEAD':
                return (
                    list.map(data=>{
                        if (data.hovered) {
                            editMenu = <EditButton onClick={() => onEditClick(data.id,listType)}/>
                        }
                        else { editMenu = <span></span> }
                        return (
                            <TableRow
                                selectable   = {false}
                                key          = {data.id}
                                onMouseEnter = {() => onRowHover(data.id)}
                                onMouseLeave = {() => onRowHover(data.id)}
                            >
                                <TableRowColumn>  {`${data.firstName}  ${data.lastName}`}  </TableRowColumn>
                                <TableRowColumn>  {data.company}                           </TableRowColumn>
                                <TableRowColumn>  {data.phone}                             </TableRowColumn>
                                <TableRowColumn>  {data.email}                             </TableRowColumn>
                                <TableRowColumn>  {data.city}                              </TableRowColumn>
                                <TableRowColumn className = "editButton">
                                    {editMenu}
                                </TableRowColumn>
                            </TableRow>
                        )
                    })
                )

            case 'CALL':
                return (
                    list.map(data => {
                        if (data.hovered) {
                            editMenu = <EditButton onClick={() => onEditClick(data.id,listType)}/>
                        }
                        else { editMenu = <span></span> }
                        return (
                            <TableRow
                                selectable   = {false}
                                key          = {data.id}
                                onMouseEnter = {() => onRowHover(data.id)}
                                onMouseLeave = {() => onRowHover(data.id)}
                            >
                                <TableRowColumn>   {data.subject}                        </TableRowColumn>
                                <TableRowColumn>   {data.type}                           </TableRowColumn>
                                <TableRowColumn>
                                    <span style = {{fontWeight:'bold'}}>
                                        {`${data.fromORto}: `}
                                    </span>
                                    {data.person}
                                </TableRowColumn>
                                <TableRowColumn>   {data.date}                           </TableRowColumn>
                                <TableRowColumn>   {`${data.start} - ${data.finish}`}    </TableRowColumn>
                                <TableRowColumn className = "editButton">
                                    {editMenu}
                                </TableRowColumn>
                            </TableRow>
                        )
                    })
                )

            default:
                return (
                    list.map(data=>{
                        if (data.hovered) {
                            editMenu = <EditButton onClick={() => onEditClick(data.id,listType)}/>
                        }
                        else { editMenu = <span></span> }
                        return (
                            <TableRow
                                selectable   = {false}
                                key          = {data.id}
                                onMouseEnter = {() => onRowHover(data.id)}
                                onMouseLeave = {() => onRowHover(data.id)}
                            >
                                <TableRowColumn>    {data.date}      </TableRowColumn>
                                <TableRowColumn>    {data.time}      </TableRowColumn>
                                <TableRowColumn>    {data.duration}  </TableRowColumn>
                                <TableRowColumn>    {data.name}      </TableRowColumn>
                                <TableRowColumn>    {data.email}     </TableRowColumn>
                                <TableRowColumn>    {data.phone}     </TableRowColumn>
                                <TableRowColumn className = "editButton">
                                    {editMenu}
                                </TableRowColumn>
                            </TableRow>
                        )
                    })
                )
        }
    }

    return (
        <TableBody
            displayRowCheckbox  = {false}
            showRowHover        = {true}
            stripedRows         = {true}
        >
            {getRow()}
        </TableBody>
    )
}

export default PanelRow



