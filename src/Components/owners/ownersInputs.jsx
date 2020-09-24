import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function OwnersInputs(props) {
  const classes = useStyles();

   const [ownerName, setOwnerName] = React.useState('');
  
  
    const handleOwnerName = (event) => {
    setOwnerName(event.target.value);
    console.log(ownerName)
  };

  const handleSubmitOwner = () => {
    console.log(ownerName)
    props.dispatch({
      type: 'ADD_OWNER', 
      payload: ownerName})
  };


  return (
    <div>
    <h3>Add Owner</h3>
    <TextField id="standard-basic" onChange = {handleOwnerName}
    label="Enter an Owner Name" />
     <Button variant="contained" color="primary" onClick = {handleSubmitOwner}>Submit</Button>
    </div>
  );
}

connect(mapStoreToProps)(OwnersInputs)