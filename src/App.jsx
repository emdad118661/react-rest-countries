import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries/Countries'
import Header from './components/Header/Header'
import Person from './components/Person/Person'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <Person></Person>
        <Countries></Countries>
        {/* <LoadCountries></LoadCountries> */}
      </div>
    </>
  )
}

// function LoadCountries() {

// const [countries, setcountries] = useState([]);

// useEffect(() => {

// fetch('https://restcountries.com/v3.1/all')
// .then (res => res.json())
// .then (data => setcountries(data))


// }, [])

// return(
// <div>
//   <h1>Visiting Every Country in the world!!!</h1>
//   <h3>Available Countries: {countries.length}</h3>
//   {
//     countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//   }
// </div>
// )

// }

// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h3>Population: {props.population}</h3>
//     </div>
//   )
// }

export default App
