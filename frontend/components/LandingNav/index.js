import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from '@material-ui/core';

export default function LandingNav() {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4">Navbar</Typography>
      </Toolbar>
    </AppBar>
  );
}
