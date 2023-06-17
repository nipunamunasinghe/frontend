import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../images/Logo.png';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, Link, Grid } from '@mui/material';

const pages = ['HOME', 'SPORTS ARENA', 'REVIEWS', 'FAQ', 'ABOUT', 'CONTACT', 'SIGN IN', 'SIGN UP', 'PROFILE'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar sx={{ 
      backgroundColor: "#F84E1C", 
      position: "static", 
      borderRadius: "20px"
      }} >
        
      <Container maxWidth="xl">
        
        <Toolbar disableGutters>
          <Link href="/">
            <Box component="img" sx={{ height: 40 }} src={Logo} />
          </Link> 

         


          <Box sx={{  flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton 
              size="large" 
              aria-label="account of current user" 
              aria-controls="menu-appbar" 
              aria-haspopup="true" 
              onClick={handleOpenNavMenu} 
              color="inherit">
              <MenuIcon />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
           </Menu>
          </Box>

          

          <Grid container justifyContent="flex-end">
 

          <Box sx={{display: { xs: 'none', md: 'flex', } }}>
            {pages.map((page) => (
              <Button  
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', '&:hover': {backgroundColor: '#FFF', color: '#F84E1C'} }}
              >
                {page}
              </Button>
            ))}
          </Box>
          </Grid>  

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >            
            </Menu>
          </Box>       
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default ResponsiveAppBar;