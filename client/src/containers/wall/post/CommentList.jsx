import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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

    // const [comments, setComments] = useState(null)


    const renderButton = () => {
        const hasCommentLoaded = props.comments !== null;
        return (
            <Button onClick={() => props.toggleComments(hasCommentLoaded)}>
                {!hasCommentLoaded ? "View" : "Hide"} Comments (
                {props.post.comments ? props.post.comments.length : 0})
            </Button>
        );
    }

    const renderList = () =>{
        if(!props.comments){
            return <></>
        }

        return props.comments.map((comment) => {
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