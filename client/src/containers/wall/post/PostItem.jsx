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
import moment from 'moment'
import CommentList from './CommentList';


function PostItem(props){


    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.post.title}
                </Typography>

                <Typography gutterBottom variant="caption" component="p">
                    {props.post.user.name} posted on{" "}
                    {moment(props.post.createdAt).format("Do MMMM YYYY")}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                    {props.post.body}
                </Typography>

                <CommentList post={props.post} />
            </CardContent>
            <CardActions>
                <TextField
                    name="comment"
                    type="text"
                    label="Comment"
                />
            </CardActions>
        </Card>
    );
}
export default PostItem