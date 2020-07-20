import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        // maxWidth: "36ch",
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: "inline",
    },
}));


function CommentList(props){

    const classes = useStyles();

    const [comments, setComments] = useState(null)


    const toggleComments = (hide = false) => {
        if(hide){
            return setComments(null)
        }
        axios.get(`http://localhost:3001/api/comments?post_id=${props.post._id}`)
            .then((response) => {
                setComments(response.data.data);
            })
    }

    const renderButton = () => {
        const hasCommentLoaded = comments !== null;
        return (
            <Button onClick={() => toggleComments(hasCommentLoaded)}>
                {!hasCommentLoaded ? "View" : "Hide"} Comments (
                {props.post.comments ? props.post.comments.length : 0})
            </Button>
        );
    }

    const renderList = () =>{
        if(!comments){
            return <></>
        }

        return comments.map((comment) => {
            return (
                <ListItem key={comment._id} alignItems="flex-start">
                    <ListItemText
                        secondary={
                            <>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    <b>{comment.user.email}</b>
                                    [{moment(comment.createdAt).from(moment())}]
                                    - {comment.body}
                                </Typography>
                            </>
                        }
                    />
                </ListItem>
            );
        });
    }

    return (
        <List className={classes.root}>
            {renderButton()}
            {renderList()}
        </List>
    );

}

export default CommentList;