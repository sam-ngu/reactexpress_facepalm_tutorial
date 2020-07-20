import React, { useState } from 'react';
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    postItem: {
        marginTop: 30,
        marginBottom: 30,
    },
    newPost: {
        marginTop: 30,
        marginBottom: 30,
        width: 400
    },
});

function NewPost(props){

    const classes = useStyles();
    axios.defaults.withCredentials = true;

    
    const [body, setBody] = useState("")
    const [title, setTitle] = useState("")
    
    const handlePostBody = (event) => {
        setBody(event.target.value)
    }

    const handlePostTitle = (event) => {
        setTitle(event.target.value)
    }

    const createPost = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/api/posts', {
            title,
            body,
        }).then((response) => {
            const newPost = response.data.data;
            props.setPosts([
                newPost,
                ...props.posts,
            ])
        });
    }

    return (
        <>
        <Grid container justify="center">
            <Typography variant="h5">
                What made you facepalmed today?
            </Typography>
        </Grid>

        <Grid container justify="center">
            <OutlinedInput
                onChange={handlePostTitle}
                className={classes.newPost}
                placeholder="Title"
            />
        </Grid>

        <Grid container justify="center">
            <form onSubmit={createPost}>
                <OutlinedInput
                    onChange={handlePostBody}
                    className={classes.newPost}
                    placeholder="What are you up to?"
                    multiline
                    rows={5}
                    rowsMax={10}
                />
                <Grid container justify="flex-end">
                    <Button color="primary" onClick={createPost}>
                        Post!
                    </Button>
                </Grid>
            </form >
        </Grid>
        </>
    )

}

export default NewPost