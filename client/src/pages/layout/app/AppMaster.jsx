import React, { useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import GlobalStore from "./../../../utils/context/GlobalStore"
import { useHistory } from "react-router-dom";


function AppMaster(props) {

    const store = GlobalStore.useGlobalContext()
    const history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:3001/api/current-user')
            .then((response) => {
                store.auth.dispatchAuth({
                    type: 'set-user'
                })
            }).catch((err) => {
                if(err.response.status === 401){
                    return history.push('/')
                }
                console.log({err});
            })
    }, [])

    return (
        <main {...props}>
            <Navbar></Navbar>
            {props.children}
        </main>
    );
}

export default AppMaster;
