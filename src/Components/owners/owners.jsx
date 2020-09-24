import React, { Component } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ownersInputs from './ownerInputs'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

class Owners extends Component() {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_OWNERS'})
  }

  handleDelete = (id) => {
    this.props.dispatch({ type: 'DELETE_OWNERS', payload: this.id})
  }

  classes = useStyles();
  render() {
  return (
    <div>
    <div>
    <ownersInputs />
    </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Number of Pets</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
 
          </TableRow>
        </TableHead>
        <TableBody>
        {this.props.store.owners.map((owner) => {
          return (
              <TableRow key={owner.id}>
                <TableCell align="right">{owner.name}</TableCell>
                <TableCell align="right">{owner.pets}</TableCell>
                <Button variant="contained" color="Primary" onClick={() =>
               {this.handleDelete(row.id)}}>Complete This Request</Button>
              </TableRow>
          );
      })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
}

export default connect(mapStoreToProps)(Owners);