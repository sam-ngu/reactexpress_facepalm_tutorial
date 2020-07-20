import React from 'react';
import Navbar from './Navbar';


function PublicMaster(props){


    return (
        <main {...props}>
            <Navbar></Navbar>

            {props.children}

            <img src="/Facepalm_silhouette.svg" alt="logo" />
        </main>
    );

}

export default PublicMaster;
