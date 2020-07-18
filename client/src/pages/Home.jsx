import React from 'react';
import PublicMaster from './layout/public/PublicMaster';
import LoginForm from '../containers/home/LoginForm';
import {Row, Col} from 'antd'



function Home (props){

    return (
        <PublicMaster style={{ height: "100%" }}>
            <LoginForm />

            {/* card */}

            {/* inside card need a form to login */}
        </PublicMaster>
    );
}

export default Home;