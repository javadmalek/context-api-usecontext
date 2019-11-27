import React, { useState, useEffect } from 'react';

const UserContext = React.createContext(null);

export const UserContextProvider = (props) => {
    const [users, setUsers] = useState(props.users);
    const [counter, setCounter] = useState(0);

    const state = { 
        users,
        setUsers,
        counter,
        setCounter,
    };

    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    )
};
export const UserContextConsumer = UserContext.Consumer;
export default UserContext;