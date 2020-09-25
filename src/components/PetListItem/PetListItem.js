import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from '@sweetalert/with-react';
import { Tooltip, IconButton, TableCell, TableRow, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';


class PetListItem extends Component {
  state = {
    editing: false,
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

  toggleEdit = () => {
    this.setState({
      editing: true
    })
  }

  checkIn = () => {
      this.props.dispatch({ type: 'CHECK_IN', payload: this.state.newPet})
      this.setState({
        editing: false
      })
  }

  render() {
      return (
        <TableRow>
            <TableCell>{this.props.pet.owner}</TableCell>
            <TableCell>{this.props.pet.name}</TableCell>
            <TableCell>{this.props.pet.breed}</TableCell>
            <TableCell>{this.props.pet.color}</TableCell>
            { this.state.editing ?
            <TableCell><TextField size="small" value={this.state.newPet.is_checked_in} onChange = {(event) => this.handleChangePet(event, 'is_checked_in')}/></TableCell>
            :
            <TableCell>{this.props.pet.is_checked_in}</TableCell>
            }
            { this.state.editing ?
            <TableCell>
                <Tooltip title="Delete" >
                    <IconButton onClick={() => this.deletePet(this.props.pet.id)} >
                        <DeleteIcon color="error" /> 
                    </IconButton>
                </Tooltip>
            <Tooltip title="Save" >
                <IconButton onClick={() => this.checkIn(this.props.pet.id)} >
                    <SaveIcon /> 
                </IconButton>
            </Tooltip>
            </TableCell>
            :
            <TableCell>
                <Tooltip title="Delete" >
                    <IconButton onClick={() => this.deletePet(this.props.pet.id)} >
                        <DeleteIcon color="error" /> 
                    </IconButton>
                </Tooltip>
                <Tooltip title="Check In" >
                    <IconButton onClick={() => this.toggleEdit()} >
                        <CheckIcon color="primary" /> 
                    </IconButton>
                </Tooltip>
            </TableCell>
            }
        </TableRow>
    )
  }
}

export default connect(mapStoreToProps)(PetListItem);
