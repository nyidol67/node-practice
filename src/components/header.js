import React from 'react';
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    // position  avatar button  right side
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      color: "white",
      fontWeight: "bold",
    },
    toolbar: {
      "&.MuiToolbar-gutters": {
        paddingLeft: "30px",
        // paddingRight: "50px",
      },
    },
    appbar: {
      "&.MuiAppBar-colorPrimary": {
        background: "#00203FFF",
        boxShadow: "none",
        borderBottom: " 0.1px solid black",
      },
    },
  
  }));
  
function Header(){
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
          <Typography variant="body1" component="h2" className={classes.title}>
              <Link href="/home" color="inherit" underline="none">
                Restaurant Search
              </Link>
            </Typography>
            <Typography variant="body1" component="h2" className={classes.title}>
              <Link href="/home" color="inherit" underline="none">
                Home
              </Link>
            </Typography>
            <Typography variant="body1" component="h2" className={classes.title}>
              <Link href="/restaurant" color="inherit" underline="none">
                Restaurant
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
};
export default Header;