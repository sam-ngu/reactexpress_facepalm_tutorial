import React, {useContext, useReducer} from 'react';



const globalContext = React.createContext();

function useGlobalContext(){

    return useContext(globalContext)
}

function GlobalProvider(){

    const GlobalContext = useGlobalContext()

    return (
        <GlobalContext.Provider value={}/>
    )
}


export default GlobalProvider