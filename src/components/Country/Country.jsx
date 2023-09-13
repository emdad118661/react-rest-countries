import React from 'react';
import './Country.css';

const Country = (props) => {
    const {area, region, flags} = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {props.name}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {props.country.population}</p>
            <p><small>Region: {region}</small></p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;