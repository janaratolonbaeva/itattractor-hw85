import React from 'react';
import {AppBar, Container, Grid, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import UserMenu from "../Menu/UserMenu";
import AnonymousMenu from "../Menu/AnonymousMenu";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '30px'
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    padding: '0'
  },
  mainLink: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: 'inherit'
    }
  },
}));

const Header = () => {
  const classes = useStyles();
  const user = useSelector(state => state.users.user);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="h6" className={classes.title}>
                  <Link to="/" className={classes.mainLink}>Soundtrack</Link>
                </Typography>
              </Grid>
              <Grid item>
                {user ? (
                  <UserMenu user={user}/>
                ) : (
                  <AnonymousMenu/>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;