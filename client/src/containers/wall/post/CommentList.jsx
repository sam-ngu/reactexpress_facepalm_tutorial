import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";


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


    return (
        <List className={classes.root}>

            {props.comments.map((comment) => {
                return (
                    <ListItem alignItems="flex-start">
                        <ListItemText
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {comment.body}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                )
            })}
        </List>
    );

}

export default CommentList;