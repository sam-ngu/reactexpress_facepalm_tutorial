import React, { useContext, useReducer } from "react";
import AuthStore from "./AuthStore";
import capitalize from 'lodash/capitalize'

const globalContext = React.createContext();

const stores = [AuthStore];

function useGlobalContext() {
    return useContext(globalContext);
}

function GlobalProvider() {
    const GlobalContext = useGlobalContext();

    const [] = stores.map((store) => {


        const  = store.items.map((item) => {
            const [reactiveState, dispatch] = useReducer(store.reducers);

            // looks like dispatchUser
            const dispatchName = `dispatch${capitalize(item.name)}`

            return {
                [store.name]: reactiveState,
                [dispatchName]: dispatch,
            };
        });
    });

    return <GlobalContext.Provider value={{}} />;
}

export default {
    GlobalProvider,
};
