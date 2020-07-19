import React, { useState, useContext } from "react";
import GlobalStore from "../../../utils/context/GlobalStore";
import isEmpty from 'lodash/isEmpty'



function Navbar(props) {

    
    const store = GlobalStore.useGlobalContext()
    

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

                {/* if user is not logged in then we display the logout button */}
                {!isEmpty(store.auth.currentUser) && (
                    <Button color="inherit"> Logout</Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
