//Dashboard-PanelList
//Type: Presentational Component ==> Container: Dashboard-PanelListContainer

//visibleList prop: array of items that need to be rendered
//visibileType prop: type of the list that needs to be rendered
//onRowHover prop: dispatches toggleHover() to toggle the item property 'hovered'
//onEditClick prop: dispatches editInfo() to fetch the Edit Pages

// getheader() determines what header to show based on the type that has been called for
// then it is reterend inside the first table
//there are two tables to make the header one exclusively fixed when the list gets large and scroll is needed
//Second table fetches the actual list by calling <PanelList /> component

import React from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
    } from 'material-ui/Table'
import {blue500} from 'material-ui/styles/colors'
import PanelRow  from './Dashboard-PanelRow.js'



const PanelList = ({visibleList,visibleType,onRowHover,onEditClick}) => {

    const getHeader = () => {
        let id = 0
        switch(visibleType) {
            case 'ACCOUNT':
                return(
                    <TableRow>
                      <TableHeaderColumn>     NAME         </TableHeaderColumn>
                      <TableHeaderColumn>     COMPANY      </TableHeaderColumn>
                      <TableHeaderColumn>     PHONE        </TableHeaderColumn>
                      <TableHeaderColumn>     EMAIL        </TableHeaderColumn>
                      <TableHeaderColumn>     CITY         </TableHeaderColumn>
                      <TableHeaderColumn>                  </TableHeaderColumn>
                    </TableRow>
                )

            case 'LEAD':
                return (
                    <TableRow>
                      <TableHeaderColumn>     NAME     </TableHeaderColumn>
                      <TableHeaderColumn>     COMPANY  </TableHeaderColumn>
                      <TableHeaderColumn>     PHONE    </TableHeaderColumn>
                      <TableHeaderColumn>     EMAIL    </TableHeaderColumn>
                      <TableHeaderColumn>     CITY     </TableHeaderColumn>
                      <TableHeaderColumn>              </TableHeaderColumn>
                       {console.log('RETURN')}
                    </TableRow>
                )

            case 'CALL':
                return (
                    <TableRow>
                      <TableHeaderColumn>     SUBJECT     </TableHeaderColumn>
                      <TableHeaderColumn>     CALL TYPE   </TableHeaderColumn>
                      <TableHeaderColumn>     FROM/TO     </TableHeaderColumn>
                      <TableHeaderColumn>     DATE        </TableHeaderColumn>
                      <TableHeaderColumn>     DURATION    </TableHeaderColumn>
                      <TableHeaderColumn>                 </TableHeaderColumn>
                    </TableRow>
                )

            default:
                return (
                    <TableRow>
                      <TableHeaderColumn>     DATE      </TableHeaderColumn>
                      <TableHeaderColumn>     TIME      </TableHeaderColumn>
                      <TableHeaderColumn>     DURATION  </TableHeaderColumn>
                      <TableHeaderColumn>     NAME      </TableHeaderColumn>
                      <TableHeaderColumn>     EMAIL     </TableHeaderColumn>
                      <TableHeaderColumn>     PHONE     </TableHeaderColumn>
                      <TableHeaderColumn>               </TableHeaderColumn>
                    </TableRow>
                )
        }
    }

    return (
      <div >
          <table className = "PanelTable-Parent">
                  <TableHeader
                    className = "Panel-Head"
                    displaySelectAll  = {false}
                    adjustForCheckbox = {false}
                    >
                      {getHeader()}
                  </TableHeader>
            </table>
            <table className = "PanelTable-Parent">
                  <PanelRow
                      list        = {visibleList}
                      listType    = {visibleType}
                      onRowHover  = {(rowId) => onRowHover(rowId)}
                      onEditClick = {(rowId,activeList) => onEditClick(rowId,activeList)}
                      />
            </table>
      </div>
    )
}

export default PanelList
