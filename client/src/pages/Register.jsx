import React from 'react';
import PublicMaster from './layout/public/PublicMaster';
import SignupForm from '../containers/home/SignupForm';


function Home (props){

    return (
        <PublicMaster style={{ height: "100%" }}>
            <SignupForm/>
        </PublicMaster>
    );
}

export default Home;