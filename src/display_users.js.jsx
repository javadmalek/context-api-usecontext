import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import UserContext from './user_context.js';

const DisplayUsers = props => {
    const { 
        users, setUsers,
        counter, setCounter,
     } = useContext(UserContext);

    const deleteUser = (index) => {
        users.splice(index, 1);
        setUsers([...users])
    }

    const listDisplay = !users ? null : users.map(({name, field}, index) => (
        <div key={index}>
            <span>{`${name} ${field}`}</span>
            <a href="#" onClick={()=>deleteUser(index)}>Delete</a>
        </div>
        ));
    
    const incCounterBtn = (<button type="button" onClick={()=>setCounter(counter + 1)}>{counter}++</button>)
    const decCounterBtn = (<button type="button" onClick={()=>setCounter(counter - 1)}>{counter}--</button>)

    return (
        <div>
            { listDisplay }
            { incCounterBtn }
            { decCounterBtn }
        </div>
    );
};

DisplayUsers.propTypes = {
    
};

export default DisplayUsers;