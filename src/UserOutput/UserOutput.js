import React from 'react';
import './UserOutput.css';

const userOutput = (props) =>{

    return(
        <div className="UserOutput">
            <p>username 1:{props.username} </p>
            <p>username 2:kkkkk </p>
            <p>username 3:kkkkkkk</p>
        </div>
    );
};

export default userOutput;