import { Box, Button, Container, Grid, IconButton, Typography, colors } from '@mui/material';
import * as React from 'react';
import MiniDrawer from './SideNavBar';
import ResponsiveAppBar from './TopNavBar';
import MainAppBar from './MainNavBar';

const ManageBookings = () => {
    return (
        <>
<MainAppBar></MainAppBar>
{/* <ResponsiveAppBar></ResponsiveAppBar> */}
        
        {/* <MainAppBar></MainAppBar> */}
        <MiniDrawer></MiniDrawer>
        <Container maxWidth ="lg">
        
        

            <Box sx={{height:'100vh', marginTop:'20px', marginLeft:'60px'}}>
            

            <Grid container spacing={2} columns={16}>
                <Grid item xs={16}>
                    <Typography variant='h4'>Manage Bookings</Typography>
                </Grid>
                <Grid item xs={4} >
                <Button variant="outlined" sx={{ borderRadius:'20px'}}>Outlined</Button>
                </Grid>
                <Grid item xs={4}>
                <Button variant="outlined" sx={{ borderRadius:'20px'}}>Outlined</Button>
                </Grid>
                <Grid item xs={4}>
                <Button variant="outlined" sx={{ borderRadius:'20px'}}>Outlined</Button>
                </Grid>
                <Grid item xs={4}>
                <Button variant="outlined" sx={{ borderRadius:'20px'}}>Outlined</Button>
                </Grid>

                
                            <Grid item xs={9}>

                            </Grid>
                            <Grid item xs={7}>
                                
                            </Grid>
                        
                            <Grid item xs={2}>

                            </Grid>
                            <Grid item xs={2}>
                                <Typography>
                                    Booking ID
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                            <Typography>
                                    Booking ID
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                            <Typography>
                                    Booking ID
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                            <Typography>
                                    Booking ID
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                            <Typography>
                                    Booking ID
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                            <Typography>
                                    Booking ID
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                            <Typography>
                                    Booking ID
                                </Typography>
                            </Grid>
                            
                        </Grid>
                

            </Box>
        </Container>

        <Typography variant='h2'>Manage Bookings</Typography>

        </>
    );
}

export default ManageBookings;