import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setcountries] = useState([]);

    useEffect( () => {
        
        
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setcountries(data));


    }, [])

    return (
        <div>
            <h2>Countries in other file: {countries.length}</h2>
            <div className='countries-container'>
            {
                countries.map(country => <Country key={country.cca3} country={country} name={country.name.common}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;