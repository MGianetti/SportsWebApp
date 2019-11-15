import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const DataTable = () => {
    
    const columns = ['Username', 'Name', 'E-mail', 'City', 'Ride in Group', 'Day of the week', 'Posts', 'Albuns', 'Photos']
    const data = [['Nick0', 'Nome0', 'E-mail0', 'City0', 'Ride in Group0', 'Day of the week0', 'Posts0', 'Albuns0', 'Photos0'],
                ['Nick1', 'Nome1', 'E-mail1', 'City1', 'Ride in Group1', 'Day of the week1', 'Posts1', 'Albuns1', 'Photos1'],
                ['Nick2', 'Nome2', 'E-mail2', 'City2', 'Ride in Group2', 'Day of the week2', 'Posts2', 'Albuns2', 'Photos2'],
                ['Nick3', 'Nome3', 'E-mail3', 'City3', 'Ride in Group3', 'Day of the week3', 'Posts3', 'Albuns3', 'Photos3'],
                ['Nick4', 'Nome4', 'E-mail4', 'City4', 'Ride in Group4', 'Day of the week4', 'Posts4', 'Albuns4', 'Photos4'],
                ['Nick5', 'Nome5', 'E-mail5', 'City5', 'Ride in Group5', 'Day of the week5', 'Posts5', 'Albuns5', 'Photos5'],
                ['Nick6', 'Nome6', 'E-mail6', 'City6', 'Ride in Group6', 'Day of the week6', 'Posts6', 'Albuns6', 'Photos6'],
                ['Nick7', 'Nome7', 'E-mail7', 'City7', 'Ride in Group7', 'Day of the week7', 'Posts7', 'Albuns7', 'Photos7']]
    return (  
        <Table stickyHeader style={{height: 50}}>
            <TableHead>
                <TableRow>
                    {columns.map( col => (
                        <TableCell id={col}>{col}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
            {data.map(user => (
                <TableRow >
                    <TableCell>{user[0]}</TableCell>
                    <TableCell>{user[1]}</TableCell>
                    <TableCell>{user[2]}</TableCell>
                    <TableCell>{user[3]}</TableCell>
                    <TableCell>{user[4]}</TableCell>
                    <TableCell>{user[5]}</TableCell>
                    <TableCell>{user[6]}</TableCell>
                    <TableCell>{user[7]}</TableCell>
                    <TableCell>{user[8]}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    );
}

export default DataTable;