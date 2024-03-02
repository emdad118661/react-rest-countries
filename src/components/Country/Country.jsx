import { useState } from 'react';
import './Country.css';

const Country = (props) => {
    const {area, region, flags, cca3} = props.country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
          setVisited(!visited)
    }
    return (
        <div className='country'>
            <h2>Country Name: {props.name}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {props.country.population}</p>
            <p><small>Region: {region}</small></p>
            <p><small>Area: {area}</small></p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited ? "visited" : "Will go"}</button>
            {
                visited ? ' I have visited':' I want to visit'
            }
        </div>
    );
};

export default Country;