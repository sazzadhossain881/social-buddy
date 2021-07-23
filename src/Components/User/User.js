import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    margin: 'auto',
    maxWidth: 1400
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const User = (props) => {
  const { userId, id,title,body} = props.user;
  const history=useHistory();
  const handlePost=(userId) => {
    history.push(`/user/${userId}`)
  }
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    UserId:{userId}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Id:{id}
                    <br/>
                    title:{title}
                    <br/>
                    body:{body}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button onClick={() => handlePost(id)} variant="contained" color="primary">
                    See More
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>

  );
};

export default User;