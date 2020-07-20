import React from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import moment from 'moment'
import CommentList from './CommentList';
import NewComment from './NewComment';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    postItem: {
        marginTop: 30,
        marginBottom: 30,
    },
});
function PostItem(props){

    const classes = useStyles();

    return (
        <Card className={classes.postItem}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.post.title}
                </Typography>

                <Typography gutterBottom variant="caption" component="p">
                    {props.post.user.email} posted on{" "}
                    {moment(props.post.createdAt).format("Do MMMM YYYY")}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                    {props.post.body}
                </Typography>

                <CommentList post={props.post} />
            </CardContent>
            <CardActions>
                <NewComment post={props.post} />
            </CardActions>
        </Card>
    );
}
export default PostItem