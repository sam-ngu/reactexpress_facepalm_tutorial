import React from 'react';
import Navbar from './Navbar';


function PublicMaster(props){


    return (
        <main {...props}>

            <Navbar></Navbar>

            {props.children}

        </main>

    )

}

export default PublicMaster;
