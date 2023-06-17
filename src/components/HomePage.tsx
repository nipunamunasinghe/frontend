import React from 'react'
import TopNavBar from './TopNavBar';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import Workout from "../images/workout.gif";

const HomePage = () => {
  return (
    <>
    <TopNavBar />
    <Typography variant='h1' sx={{
      color: "#000",


    }}></Typography>
    <Container>
    <Box sx={{ 
        width: '100%', 
        display: 'flex', 
        minHeight: '600px', 
        alignItems: 'center', 
        justifyContent: 'center'}}>
            
      <Grid container spacing={6} sx={{
        display: 'flex', 
        alignItems: 'center', 
        maxWidth: '1300px', 
        padding: '50px'}}>
        
        <Grid item xs={12} md={5}>
          <Typography variant="h3" sx={{paddingBottom: '15px'}}>
            Book a Sports Arena
          </Typography>
          <Typography variant="h6" sx={{opacity: '0.4', paddingBottom: '30px'}}>
            Book a Sports Arena without any hassle with the number 1 Sports Arena Booking App in Srilanka.
          </Typography>
          <Button variant="contained" sx={{ 
            width: '200px', 
            fontSize: '16px',  
            backgroundColor: '#13C35C', 
            color: '#fff', 
            '&:hover': {
                backgroundColor: '#000', 
                color: '#fff'} 
            }}>
            BOOK NOW
          </Button>
        </Grid>
               
        <Grid item xs={12} md={7}>  
            <img src={Workout} alt='workout illustration' style={{width: '100%'}} />
        </Grid>
      </Grid>
    </Box>
    </Container>
    </>
  )
}

export default HomePage







