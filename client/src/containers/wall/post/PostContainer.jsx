import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios'

import PostItem from './PostItem';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

function PostContainer(){
    const classes = useStyles();

    const history = useHistory();
    const [posts, setPosts] = useState([])


    // call post api to load all the post in page
    useEffect(() => {

        axios.get('http://localhost:3001/api/posts', {
            withCredentials: true,
        })
            .then((response) => {
                setPosts(response.data.data)
            }).catch((err) => {
                if(err.response.status === 401){
                    
                }
            })

    }, [])
    


    // text area
    return (
        <Box>
            <Container>
                {posts.map((post) => (
                    <PostItem key={post._id} post={post}/>
                ))}
            </Container>
        </Box>
    );
}
export default PostContainer;