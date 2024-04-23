import React, {createContext} from 'react';

export const AppContext = createContext(null);

const ContextProvider = (props) => {

    const contextValue = {};

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}