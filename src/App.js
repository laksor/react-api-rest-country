
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadCountry></LoadCountry>
    </div>
  );
}

function LoadCountry (){
  const [countries, setCountries] = useState([]);
  useEffect( () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return(
    <div>
      <h1>All country of the world</h1>
      <h3>{countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
      
    </div>
  )
}

function Country(props){
  return(
    <div className='country'>
      <h2>name: {props.name}</h2>
      <h4>Population : {props.population}</h4>
    </div>
  )
}

export default App;
