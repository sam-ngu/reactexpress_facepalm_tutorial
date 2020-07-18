import React from 'react';
import PublicMaster from './layout/public/PublicMaster';
import LoginForm from '../containers/home/LoginForm';
import {Row, Col} from 'antd'



function Home (props){

    return (
        <PublicMaster>

            <Row style={{width:"100vw", height:"90vh", display:"flex", alignItems:"center", justifyContent:"center", paddingBottom:"10em"}}>
                <Col span={8}>
                    <LoginForm />
                </Col>
            </Row>

            {/* card */}

            {/* inside card need a form to login */}
        </PublicMaster>
    );
}

export default Home;