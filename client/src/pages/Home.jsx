import React from 'react';
import PublicMaster from './layout/public/PublicMaster';
import LoginForm from '../containers/home/LoginForm';
import {Row, Col} from 'antd'



function Home (props){

    return (
        <PublicMaster style={{ height: "100%" }}>

            <Row justify="center" align="align" style={{marginTop: '50px'}}>
                <Col span={12}>
                    <LoginForm />
                </Col>
            </Row>

            {/* card */}

            {/* inside card need a form to login */}
        </PublicMaster>
    );
}

export default Home;