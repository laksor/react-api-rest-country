import React from 'react';

const Load = (props) => {
    return (
        <div>
            <h2>Country name: {props.name}</h2>
            <p>population: {props.population}</p>
        </div>
    );
};

export default Load;