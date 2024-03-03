import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setcountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect( () => {
        
        
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setcountries(data));


    }, [])

    const handleVisitedCountries = country =>{
         const newVisitedCountries = [...visitedCountries, country];
         setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flags) =>{
         const newVisitedFlags = [...visitedFlags, flags];
         setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h2>Countries in other file: {countries.length}</h2>
            {/* visited countries */}
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                     {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                     }
                </ul>
            </div>
            {/* display flags */}
            <div className='flags-container'>
               {
                visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)
               }
            </div>
            {/* display countries */}
            <div className='countries-container'>
            {
                countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;