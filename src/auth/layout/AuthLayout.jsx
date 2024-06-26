import { Grid, Typography } from "@mui/material";
import NewSolutica from '../../media/NewSolutica.jpg';
// import { useTheme } from '@mui/material/styles';


export const AuthLayout = ({ children, title = '' }) => {

    // const theme = useTheme();

    return (     
        <Grid container>
            <Grid item className="back">
                <section className="vertical">
                    <div className="separator"></div>
                </section>
            </Grid>
            <Grid item className="front">
                <Grid item
                    xs={false}
                    sx={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        backgroundImage: `url(${NewSolutica})`,                        
                        backgroundSize: 'cover',                          
                        width: 500,
                        minHeight: 100,                     
                    }}                    
                />
                <Grid item
                    className='box-shadow'
                    xs={3}
                    sx={{
                        width: { sm: 1000 },
                        backgroundColor: 'white',
                        padding: 3,
                        borderRadius: 2,
                        border: '2px solid',
                        // minHeight: 50 + 'vh',
                        pt: 12,
                        ml: 70,
                        mt: 10,
                        display: 'grid',
                        placeItems: 'center',
                        borderColor: 'secondary.dark'
                    }}>

                    <Typography variant='h5' sx={{ mb: 1 }}>{title}</Typography>

                    {children}

                </Grid>
            </Grid>
        </Grid >
    )
}
