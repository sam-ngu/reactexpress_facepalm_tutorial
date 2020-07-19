import React, { useContext, useReducer } from "react";
import { authReducer, auth } from './AuthStore';

const globalContext = React.createContext();

function useGlobalContext() {
    return useContext(globalContext);
}

function GlobalProvider() {
    const GlobalContext = useGlobalContext();

    const [authState, dispatchAuth] = useReducer(authReducer, auth)


    return <GlobalContext.Provider value={{
        auth: {  // grouping auth related state 
            authState,
            dispatchAuth,
        }
    }} >
        

    </GlobalContext.Provider>;
}

export default {
    GlobalProvider,
    useGlobalContext,
};
