import React from 'react';
import {Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    marginBottom: '20px'
  },
  paper: {
    maxWidth: '90%',
    padding: '10px',
    textAlign: 'center'
  },
  marginBottom: {
    marginBottom: '10px'
  }
})

const TrackItem = props => {
  const classes = useStyle();
  return (
    <Grid item xs={2} md={4} className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.marginBottom}>
          {props.name}
        </Typography>
        <Typography variant="body1" className={classes.marginBottom}>track number: {props.number}</Typography>
        <Typography variant="body2" className={classes.marginBottom}>track duration: {props.duration}</Typography>
      </Paper>
    </Grid>
  );
};

export default TrackItem;