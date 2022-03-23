import React from 'react';
import './Load.css';
const Load = (props) => {
    return (
        <div className='load'>
            <img src={props.flag}></img>
            <h2>Country name: {props.name}</h2>
            <p>Region: {props.region}</p>
            <p>population: {props.population}</p>
            <p>Capital: {props.capital}</p>
        </div>
    );
};

export default Load;