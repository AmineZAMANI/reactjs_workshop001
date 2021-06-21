import React from 'react';
import {Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

export default class TableComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    render() {
        return (<TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {this.props.cols.map((col) => (
                            <TableCell key={col.colKey}>{col.colLibelle}</TableCell>
                        ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.rows.map((row) => (
                        <TableRow key={row.id}> {
                            this.props.cols.map((col) => (
                                <TableCell key={col.colKey} component="th" scope="row">
                                    {
                                        col['colKey'] === 'button' && (
                                            <div><Button onClick={() => col.action(row)}>Supprimer</Button></div>)
                                    }

                                    {
                                        col['colKey'] === 'check' && (<div>
                                            <Checkbox
                                                value="checkedA"
                                                inputProps={{ 'aria-label': 'Checkbox A' }}
                                            />
                                        </div>)
                                    }

                                    <div>{row && row[col.colKey] ? row[col.colKey] : ''}</div>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>)
    }

}
