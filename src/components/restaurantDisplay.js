import React from 'react';
import {
    Card,
    Typography,
    CardContent,
    Grid,
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";

function RestaurantDisplay(props) {
    const { _id, name, thumb, rating, address } = props.restaurant;
    const useStyles = makeStyles((theme) => ({
        content: {
          "&.MuiCardContent-root": {
            padding: 0,
          },
          margin: "10px",
        },
        root: {
          margin: "10px 0",
        },
      }));
    const classes = useStyles();
    return(
    <div>
        <Card className={classes.root} key={_id}>
          <CardContent className={classes.content}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img src={thumb} alt="res-img" width="250px"/>
              </Grid>
              <Grid item xs={8}>
                <Typography
                  variant="body2"
                  color="inherit"
                  style={{
                    fontSize: 14,
                    marginTop: 18,
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  variant="body2"
                  color="inherit"
                  component="h5"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {address}
                </Typography>
                <Typography variant="overline" display="block" color="inherit">
                  {rating}
                </Typography>
                <Typography variant="subtitle2" color="inherit">
                  categories
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </div>
  )
}
export default RestaurantDisplay