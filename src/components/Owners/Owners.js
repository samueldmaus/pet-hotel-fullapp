import React, { Component, useState, useEffect } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import OwnersInputs from './OwnersInputs.js'

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


export default connect(mapStoreToProps)(function Owners(props) {

  useEffect(() => {
    props.dispatch({ type: 'GET_OWNERS' });
  }, []);

  const handleDelete = (id) => {
    props.dispatch({ type: 'DELETE_OWNER', payload: { toDelete: id } })
    console.log('in id', id)
  }

  const classes = useStyles();

  return (
    <div>
      <div>
        <OwnersInputs />
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Number of Pets</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {props.store.owners.map((owner) => {
              return (
                <TableRow key={owner.id}>
                  <TableCell align="right">{owner.name}</TableCell>
                  <TableCell align="right">{owner.pets}</TableCell>
                  <TableCell align="right"><Button variant="contained" color="Primary" onClick={() => { handleDelete(owner.id) }}>Delete</Button></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

})

