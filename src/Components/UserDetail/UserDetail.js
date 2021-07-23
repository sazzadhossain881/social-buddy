import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


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

const UserDetail = () => {
    const classes = useStyles();
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [comments,setComments]=useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${userId}`;
        fetch(url)
            .then(Response => Response.json())
            .then(data => setUser(data))
    }, [])
    useEffect(()=> {
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${userId}`;
        fetch(url)
        .then(Response => Response.json())
        .then(data => setComments(data))
    })
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
                  <Typography variant="body2" color="textSecondary">
                    Id:{user.id}
                    <br/>
                    title:{user.title}
                    <br/>
                    body:{user.body}
                  </Typography>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div> 
                                                    
                <h3>Comments:</h3>

                 
                {
                    comments.map(comment=><Comment comment={comment}></Comment>)
                }
          
        </div>
    );
};

export default UserDetail;