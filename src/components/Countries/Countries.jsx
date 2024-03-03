import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setcountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect( () => {
        
        
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setcountries(data));


    }, [])

    const handleVisitedCountries = country =>{
         const newVisitedCountries = [...visitedCountries, country];
         setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <h2>Countries in other file: {countries.length}</h2>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                     {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                     }
                </ul>
            </div>
            <div className='countries-container'>
            {
                countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;