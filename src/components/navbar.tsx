import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';
import logo from '../assets/images/world.png';

export default function NavBar() {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Avatar alt="CI" src={logo} />
        <Typography
          variant="h6"
          align="center"
          sx={{ fontWeight: 700, marginLeft: '10px' }}
        >
          Where in the world?
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
