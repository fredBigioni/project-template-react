import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import {
    Box, Button, CircularProgress,
    Dialog, DialogActions, DialogContent, Grid,
    TextField, DialogTitle,
} from '@mui/material';
import { Close } from '@mui/icons-material'
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { changeStateModal, getAllUsers, updateUser } from '../../../../store';


export const Modal = (props) => {
    const { onClose, open, title, data } = props;

    const { isLoading } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const validationSubmit = (event) => {

        if (event.target['firstName'].value != "" &&
            event.target['lastName'].value != "" &&
            event.target['userName'].value != "" &&
            event.target['email'].value != "" &&
            event.target['rol'].value != "") {

            
            const dataToSend = {
                firstName: event.target['firstName'].value,
                lastName: event.target['lastName'].value,
                userName: event.target['userName'].value,
                email: event.target['email'].value,
                rolId: data.rolId,
                id: data.id,
            }
            dispatch(updateUser(dataToSend));                        
        }
        else {
            swal({
                title: "Error",
                text: "No puede contener campos vacios",
                icon: "error",
                dangerMode: true,
            });
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        validationSubmit(event);
    };


    return (
        <>
            {
                open &&
                <Dialog open={open} onClose={onClose} >
                    <Grid container >
                        <Grid item xs={11}>
                            <DialogTitle>{title}</DialogTitle>
                        </Grid>
                        <Grid item xs={1} pt={2}>
                            <Close onClick={onClose} className="closeIcon"></Close>
                        </Grid>

                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <DialogContent sx={{ maxWidth: 300 }}>
                            {
                                isLoading ?
                                    <Box sx={{ display: 'flex', minWidth: 350 }}>
                                        <CircularProgress />
                                    </Box>
                                    :
                                    <div>
                                        <Grid container direction="row">
                                            {!isLoading &&
                                                <>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            defaultValue={data ? data.firstName : ''}
                                                            label="Nombre"
                                                            id="firstName"
                                                            variant="standard"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            defaultValue={data ? data.lastName : ''}
                                                            label="Apellido"
                                                            id="lastName"
                                                            variant="standard"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            defaultValue={data ? data.userName : ''}
                                                            label="UserName"
                                                            id="userName"
                                                            variant="standard"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            defaultValue={data ? data.email : ''}
                                                            label="Email"
                                                            id="email"
                                                            variant="standard"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            defaultValue={data ? data.rolDescription : ''}
                                                            label="Rol"
                                                            id="rol"
                                                            variant="standard"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sx={{ mt: 2 }}>
                                                        {/* <TextField
                                                            // defaultValue={taskEdit.roadmapDescription}
                                                            label="Cambiar pass"
                                                            id="changePassword"
                                                            variant="standard"
                                                            fullWidth
                                                            disabled
                                                        /> */}
                                                        <Button disabled xs={12} sx={{ width: 255 }} variant="contained" color="secondary">
                                                            Cambiar Password
                                                        </Button>
                                                    </Grid>
                                                </>
                                            }
                                            {/* <Grid item xs={9}>
                                                <TextField
                                                    fullWidth
                                                    id="reference-input"
                                                    name="reference"
                                                    label="Referencia/Ticket"
                                                    type="text"
                                                    variant="standard"
                                                    className="TextFieldValidated"
                                                // inputProps={{ style: { color: `${renderReferenceColor()}` } }}
                                                // defaultValue={actionType === 'Edit' ?
                                                //     taskEdit.reference
                                                //     :
                                                //     ''
                                                // }
                                                // disabled={isDisabled}
                                                // onChange={(ev) => setReferenceNumber(ev.target.value)}
                                                // onKeyDown={(e) => {
                                                //     if (filters.reference.validated) { dispatch(setReferenceValidated(null)) }
                                                // }}
                                                />
                                                
                                            </Grid> */}

                                            {/* <Grid item xs={12} >
                                                <TextField
                                                    id="observation-input"
                                                    fullWidth
                                                    multiline={true}
                                                    name="observation"
                                                    label="Observación"
                                                    type="text"
                                                    variant="standard"
                                                // defaultValue={actionType === 'Edit' ?
                                                // taskEdit.observation
                                                // :
                                                // ''}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    id="datetime-start"
                                                    fullWidth
                                                    sx={{ minWidth: 250 }}
                                                    label="Desde"
                                                    // disabled={actionType === 'Edit' ? true : false}
                                                    // type={actionType === 'Finished' ? "date" : "datetime-local"}
                                                    // defaultValue={actionType === 'Edit' ?
                                                    //     taskEdit.start
                                                    //     :
                                                    //     ''}
                                                    variant="standard"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </Grid> */}

                                        </Grid>
                                    </div>
                            }
                        </DialogContent>
                        <DialogActions>
                            <Grid>
                                <Button sx={{ mr: 1.5 }} variant="contained" color="warning" type="submit">
                                    Guardar
                                </Button>
                            </Grid>
                        </DialogActions>
                    </form>

                </Dialog >
            }
        </>

    );
}

Modal.propTypes = {
    // onClose: PropTypes.func.isRequired,
    // open: PropTypes.bool.isRequired,
};