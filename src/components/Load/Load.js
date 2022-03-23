import React from 'react';
import './Load.css';
const Load = (props) => {
    const {area, capital, population, region, name, flags} = props.country;
    return (
        <div className='load'>
            <img src={flags.png}></img>
            <h2>Country name: {name.common}</h2>
            <p>Region: {region}</p>
            <p>population: {population}</p>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Load;