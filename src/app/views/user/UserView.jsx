import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { Box, Button, Card, CardContent, CircularProgress, Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import MaterialReactTable from 'material-react-table';
import { Modal } from './components';
import { changeIsLoading, changeStateModal, getAllUsers } from '../../../store';
import { AlarmAdd, Edit } from '@mui/icons-material';

export const UserView = () => {

    const { id } = useSelector(state => state.auth.user);
    const { userData, isLoading, isModalOpening } = useSelector(state => state.user);
    const [title, setTitle] = useState('');
    const [dataModal, setDataModal] = useState({});

    const dispatch = useDispatch();

    const handleClose = (value) => {
        dispatch(changeStateModal(false));
    };

    const openEditModal = (row) => {
        setDataModal(row.original);
        dispatch(changeStateModal(true));
        dispatch(changeIsLoading(false));
    };

    const openNewModal = () => {
        setDataModal(null);
        dispatch(changeStateModal(true));
        dispatch(changeIsLoading(false));
    }

    const handleEdit = (row) => {
        // const taskId = row.original.id;
        setTitle('Editar Usuario');
        dispatch(changeIsLoading(true));
        // dispatch(setActionType('Edit'));
        // dispatch(setActionType('Edit'));
        openEditModal(row);
    }
    const columnsUsersData = useMemo(() => [
        {
            accessorKey: 'userName',
            header: 'Usuario',
        },
        {
            accessorKey: 'firstName',
            header: 'Nombre',
        },
        {
            accessorKey: 'lastName',
            header: 'Apellido',
        },
        {
            accessorKey: 'email',
            header: 'Email',
        },
        {
            accessorKey: 'password',
            header: 'Contraseña',
        },
        {
            accessorKey: 'rolDescription',
            header: 'Rol',
        },
        {
            accessorKey: 'id',
            header: 'UserId',
            size: 0,
            // Header: renderAddTask ,
            muiTableHeadCellProps: ({ column }) => ({
                sx: {
                    visibility: 'hidden',
                },
            }),
            Cell: ({ cell, column }) => (
                <>{cell.visibility = false}</>
            )
        },
        {
            accessorKey: 'status',
            header: 'Estado',
            size: 0,
            // Header: renderAddTask ,
            muiTableHeadCellProps: ({ column }) => ({
                sx: {
                    visibility: 'hidden',
                },
            }),
            Cell: ({ cell, column }) => (
                <>{cell.visibility = false}</>
            )
        },
        // {
        //     accessorKey: 'creationDate',
        //     header: 'Fecha Creación',
        // },
        // {
        //     accessorKey: 'description',
        //     header: 'Descripción',
        // },
        // {
        //   accessorKey: 'creationDate',
        //   header: 'Fecha creación',
        //   size: 0,
        //   // Header: renderAddTask ,
        //   muiTableHeadCellProps: ({ column }) => ({
        //     sx: {
        //       visibility: 'hidden',
        //     },
        //   }),
        //   Cell: ({ cell, column }) => (
        //     <>{cell.visibility = false}</>
        //   )
        // },
        // {
        //   accessorKey: 'userId',
        //   header: 'userid',
        //   size: 0,
        //   // Header: renderAddTask ,
        //   muiTableHeadCellProps: ({ column }) => ({
        //     sx: {
        //       visibility: 'hidden',
        //     },
        //   }),
        //   Cell: ({ cell, column }) => (
        //     <>{cell.visibility = false}</>
        //   )
        // },
    ]);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [isModalOpening])

    const renderColumnActions = () => {
        return (
            <>
                <Grid container>
                    <Tooltip title="Nuevo Usuario">
                        <IconButton
                            color="secondary"
                            sx={{
                                // marginBottom: 3
                            }}
                            onClick={() => {
                                setTitle('Nuevo Usuario');
                                openNewModal();
                            }}
                        >
                            <AlarmAdd />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </>
        );
    }

    return (
        <>

            <Modal
                open={isModalOpening}
                onClose={handleClose}
                title={title}
                data={dataModal}
            />
            {/* <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Card sx={{}} >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Datos personales
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div" // sx={{ color: "#CCD1D1" }}
                            >
                                <b>Nombre:</b> <i> {user.firstName} {user.lastName}</i>
                                <br />
                                <b>Equipo:</b> <i>{user.teamName}</i>
                                <br />
                                <b>Rol:</b> <i>{user.rolDescription}</i>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid> */}
            <Box
                sx={{
                    mb: 2,
                    display: "flex",
                    flexDirection: "column",
                    // height: 300,
                    // overflow: "hidden",
                    // overflowY: "scroll",
                }}
            >
                <Grid container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={2}>
                            <Card>
                                <Stack spacing={1} direction="column">
                                    {
                                        !userData ? <CircularProgress disableShrink /> :
                                            <>
                                                <Suspense fallback={<CircularProgress disableShrink />}>
                                                    <MaterialReactTable
                                                        columns={columnsUsersData}
                                                        data={userData}
                                                        displayColumnDefOptions={{
                                                            'mrt-row-actions': {
                                                                Header: renderColumnActions,
                                                                size: 100,
                                                                //use a text button instead of a icon button
                                                                Cell: ({ row, table }) => (
                                                                    // <Button onClick={() => table.setEditingRow(row)}>Edit Customer</Button>
                                                                    <span><Edit className='editIcon'
                                                                        onClick={() => {
                                                                            handleEdit(row)
                                                                        }} /></span>
                                                                ),
                                                            }
                                                        }}
                                                        initialState={{ pagination: { pageSize: 5, pageIndex: 0 } }}
                                                        muiTableProps={{
                                                            sx: {
                                                                tableLayout: 'fixed',
                                                            },
                                                        }}
                                                        enableEditing
                                                    />
                                                </Suspense>
                                            </>
                                    }
                                </Stack>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}
