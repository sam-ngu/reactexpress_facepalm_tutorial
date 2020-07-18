import React from "react";
import Navbar from "./Navbar";

function AppMaster(props) {
    return (
        <main {...props}>
            <Navbar></Navbar>
            {props.children}
        </main>
    );
}

export default AppMaster;
