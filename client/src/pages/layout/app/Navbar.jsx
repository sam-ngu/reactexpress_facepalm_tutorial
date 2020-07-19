import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import GlobalStore from "../../../utils/context/GlobalStore";
import isEmpty from "lodash/isEmpty";
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Navbar(props) {

    const store = GlobalStore.useGlobalContext();
    const classes = useStyles();


    const logout = () => {
        axios.get('http://localhost:3001/api/logout')
            .then((response) => {
                window.location.href = '/'
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Facepalm
                </Typography>

                <Button color="inherit"> Profile </Button>

                {/* if user is not logged in then we display the logout button */}
                
                <Button onClick={logout} color="inherit"> Logout</Button>
                
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
