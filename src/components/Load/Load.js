import React from 'react';

const Load = (props) => {
    return (
        <div>
            <img src={props.flag}></img>
            <h2>Country name: {props.name}</h2>
            <p>population: {props.population}</p>
            <p>Capital: {props.capital}</p>
        </div>
    );
};

export default Load;