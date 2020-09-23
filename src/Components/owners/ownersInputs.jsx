import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ownerInputFields() {
  const classes = useStyles();

   const [ownerName, setOwnerName] = React.useState('');
  
  
    const handleOwnerName = (value) = (event) => {
    setOwner(event.target.value);
  };

  const handleSubmitOwner = () => {
    setOwner(event.target.value);
  };


  return (
    <h3>Add Owner</h3>
    <TextField id="standard-basic" onChange = {this.handleOwnerName}
    label="Standard" value={ownerName}/>
     <Button onClick = {handleSubmit} variant={contained} color={primary}
     >Submit</Button>

  );
}

connect(mapstoreToProps)(OwnersTable)