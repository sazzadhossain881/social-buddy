import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 1400,
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


const Comment = (props) => {
    const classes = useStyles();
    const { postId, id, name, email, body } = props.comment;
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
                postId:{postId}
                </Typography>
                <Typography variant="body2" gutterBottom>
                id:{id}
                </Typography>
                <Typography variant="body2" color="textblack">
                name:{name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                email:{email}
                <br/>
                body:{body}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    );
};

export default Comment;