import React, { useContext, useReducer } from "react";
// import { authReducer, auth } from './AuthStore';
import { auth, authReducer } from "./AuthStore";


const GlobalContext = React.createContext();

function useGlobalContext() {
    return useContext(GlobalContext);
}

// setting the prop 'value' to be an empty array. We dont want components to overwrite the default store state
function GlobalProvider({value = [], ...props}) {

    const [authState, dispatchAuth] = useReducer(authReducer, auth)

    return (<GlobalContext.Provider value={{
            auth: {  // grouping auth related state 
                authState,
                dispatchAuth,
            },
         
        }} {...props}
    />);
}

export default {
    GlobalProvider,
    useGlobalContext,
};
