import React, { useEffect, useState } from 'react';
import Load from '../Load/Load';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[])
    return (
    <div>
        <h2>Country:{countries.length}</h2>
        {
            countries.map(country => <Load 
                name={country.name.common} 
                population={country.population} 
                flag={country.flags.png}
                capital={country.capital}
                ></Load>)
        }
    </div>
    );
};

export default Countries;