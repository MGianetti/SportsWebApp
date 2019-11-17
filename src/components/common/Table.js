/** @format */

import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    table: {
        minHeight: 20,
        height: 60,
    },
    greenText: {
        color: '#1abc9c',
    },
}))

const DataTable = ({tableData, tableHeader, filterData}) => {
    const classes = useStyles()

    if (filterData !== undefined && filterData !== '') {
        var filteredUsers = tableData.filter(tableRow => {
            if (tableRow[0].includes(filterData) | tableRow[1].includes(filterData)) {
                return tableRow
            }
        })
        tableData = filteredUsers
    }
    return (
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    {tableHeader.map(col => (
                        <TableCell key={`${col}-header`}>{col}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.map(row => (
                    <TableRow hover key={`${row[0]}-row`}>
                        {tableHeader.map(col => {
                            if (
                                tableHeader.indexOf(col) === 2 ||
                                tableHeader.indexOf(col) === 3 ||
                                tableHeader.indexOf(col) === 6 ||
                                tableHeader.indexOf(col) === 7
                            ) {
                                return (
                                    <TableCell className={classes.greenText} key={`${row[0]}-${col}`}>
                                        {row[tableHeader.indexOf(col)]}
                                    </TableCell>
                                )
                            } else {
                                return <TableCell key={`${row[0]}-${col}`}>{row[tableHeader.indexOf(col)]}</TableCell>
                            }
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default DataTable
