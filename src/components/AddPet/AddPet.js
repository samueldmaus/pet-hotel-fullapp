import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from '@sweetalert/with-react';
import { TextField, MenuItem, Select, IconButton, Tooltip, Grid, Paper, FormControl, InputLabel } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

class AddPet extends Component {
    state = {
        newPet: {
            name: '',
            breed: '',
            color: '',
            owner: '',
            isCheckedIn: 'No',
        }
    };

    handleChangePet = (event, propertyToChange) => {
        this.setState({
            newPet: {
                ...this.state.newPet,
                [propertyToChange]: event.target.value,
            }
        })
    }

    addPet = () => {
        if (this.state.newPet.name === '' || this.state.newPet.breed === '' || this.state.newPet.color === '' || this.state.newPet.owner === '') {
            swal('Please input all fields!');
        } else {
            console.log(this.state.newPet);
            this.props.dispatch({ type: 'ADD_PET', payload: this.state.newPet })
            this.setState({
                newPet: {
                    name: '',
                    breed: '',
                    color: '',
                    owner: '',
                    isCheckedIn: 'No',
                }
            })
        }
    }


    render() {
        return (
            <Grid container justify="center" alignItems="center">
                <Paper>
                        <div className="input">
                            <Grid xs={2} item>
                                <TextField label="Name" value={this.state.newPet.name} onChange={(event) => this.handleChangePet(event, 'name')} />
                            </Grid>
                            <Grid xs={2} item>
                                <TextField label="Color" value={this.state.newPet.color} onChange={(event) => this.handleChangePet(event, 'color')} />
                            </Grid>
                            <Grid xs={2} item>
                                <TextField label="Breed" value={this.state.newPet.breed} onChange={(event) => this.handleChangePet(event, 'breed')} />
                            </Grid>
                            <Grid xs={2} item>
                            <FormControl>
                                <InputLabel>Owner</InputLabel>
                                <Select className="select" value={this.state.newPet.owner} onChange={(value) => this.handleChangePet(value, 'owner')}>
                                    {this.props.store.owners.map((owner) => {
                                        return (
                                            <MenuItem value={owner.id} key={owner.id}>{owner.name}</MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>
                            </Grid>
                            <Grid xs={2} item>
                                <Tooltip title="Add" >
                                    <IconButton onClick={() => this.addPet()} >
                                        <AddBoxIcon color="primary" size="medium" />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </div>
                </Paper>
            </Grid>
        );
    }
}

export default connect(mapStoreToProps)(AddPet);
