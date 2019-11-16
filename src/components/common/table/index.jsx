import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    table: {
        minHeight: 20,
        height: '30vh'
    },    
}));

const DataTable = ({ tableData, tableHeader }) => {
    const classes = useStyles();
    return (  
        <Table stickyHeader className={classes.table}>
            <TableHead>
                <TableRow>
                    {tableHeader.map( col => (
                        <TableCell key={`${col}-header`}>{col}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
            {tableData.map(row => (
                <TableRow key={`${row[0]}-row`}>
                    {tableHeader.map(col => (
                        <TableCell key={`${row[0]}-${col}`}>
                            { row[tableHeader.indexOf(col)] }
                        </TableCell>)
                    )}

                </TableRow>
            ))}
            </TableBody>
        </Table>
    );
}

export default DataTable;