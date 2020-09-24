import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from '@sweetalert/with-react';
import { Tooltip, IconButton, TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class PetListItem extends Component {
  state = {
    newPet: this.props.pet
  };

  componentDidMount() {
    this.setState({
      newPet: this.props.pet
    })
    console.log(this.state.newPet);
  }

  handleChangePet = (event, propertyToChange) => {
    this.setState({
        newPet: {
            ...this.state.newPet,
            [propertyToChange]: event.target.value,
        }
    })
  }

  deletePet = (id) => {
    swal({
        title: "Are you sure?",
        text: `${this.props.pet.name} will be removed!`,
        icon: "warning",
        buttons: true,
    }).then((toDelete) => {
        if (toDelete) {
            swal(`${this.props.pet.name} has been removed!`, {
                icon: "success",
            });
            this.props.dispatch({ type: 'REMOVE_PET', payload: id})
        } else {
            swal(`${this.props.pet.name} was not removed!`);
        }
    })
  }

  checkIn = (id) => {
      this.props.dispatch({ type: 'CHECK_IN', payload: id})
  }


  render() {
      return (
        <TableRow>
            <TableCell>{this.state.newPet.owner}</TableCell>
            <TableCell>{this.state.newPet.name}</TableCell>
            <TableCell>{this.state.newPet.breed}</TableCell>
            <TableCell>{this.state.newPet.color}</TableCell>
            <TableCell>{this.state.newPet.isCheckedIn}</TableCell>
            <TableCell>
                <Tooltip title="Delete" >
                <IconButton onClick={() => this.deletePet(this.props.pet.pet_id)} >
                    <DeleteIcon color="error" /> 
                </IconButton>
                </Tooltip>
                <Tooltip title="Check In" >
                <IconButton onClick={() => this.checkIn(this.props.pet.pet_id)} >
                    <DeleteIcon color="error" /> 
                </IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
      )
  }
}

export default connect(mapStoreToProps)(PetListItem);
