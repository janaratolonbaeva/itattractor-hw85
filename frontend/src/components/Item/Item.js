import React from 'react';
import {Link} from "react-router-dom";
import {apiURL} from "../../config";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  CardActionArea
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: '90%',
    margin: '0 10px 10px',
    height: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundPosition: 'top'
  },
});

const Item = (props) => {
  const classes = useStyles();

  let button = (
    <Button size="small" color="primary" component={Link} to={props.url}>
      Learn More
    </Button>
  );

  if (props.onClick) {
    button = (<Button size="small" color="primary" onClick={props.onClick}>
      Learn More
    </Button>)
  }

  return (
    <Grid item xs={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea onClick={props.clickContent}>
          <CardMedia
            className={classes.media}
            image={`${apiURL}/${props.media}`}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.info}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {button}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Item;