import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/';
import mapStoreToProps from '../../redux/mapStoreToProps';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function OwnerInputFields() {
  const classes = useStyles();

   const [ownerName, setOwnerName] = React.useState('');
  
  
    const handleOwnerName = (value) = (event) => {
    setOwner(event.target.value);
    console.log(ownerName)
  };

  const handleSubmitOwner = () => {
    props.dispatch({
      type: 'ADD_OWNERS', 
      payload: ownerName})
  };


  return (
    <div>
    <h3>Add Owner</h3>
    <TextField id="standard-basic" onChange = {this.handleOwnerName}
    label="Standard" value={ownerName}/>
     <Button onClick = {handleSubmitOwner} variant={contained} color={primary}
     >Submit</Button>
    </div>
  );
}

connect(mapStoreToProps)(OwnerInputFields)