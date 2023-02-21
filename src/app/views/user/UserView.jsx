import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

export const UserView = () => {

    
    const { user } = useSelector(state => state.auth);

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Stack spacing={1} direction="column">
                        <Card
                            sx={{
                            }}
                        >
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div"
                                // sx={{ color: "#FFF" }}
                                >
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
                        <Card
                        // sx={{
                        //     minWidth: {
                        //         sm: 48 + "%",
                        //         md: 49 + "%"
                        //     },
                        //     minHeight: {
                        //         // sx: 200 + "vh",
                        //         sm: 26.5 + "vh",
                        //         md: 150
                        //     }
                        // }} 
                        >
                            <CardContent>

                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#FFF" }}>
                                    $900.00
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="body2"
                                    component="div"
                                    sx={{ color: "#CCD1D1" }}>
                                    Total Earned
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}
