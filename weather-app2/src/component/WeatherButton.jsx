import React from 'react'
import {Button} from 'react-bootstrap';



const WeatherButton = ({cities, setCity, selectedCity, handleCityChange}) => {
  
  return (
    <div>
        <Button
        variant={`${selectedCity == null ? "light" : "outline-light"}`}
        onClick={()=> handleCityChange("current")}>Current Location</Button>
        
        {cities.map((city)=>(
        <Button
        variant={`${selectedCity == city ? "light" : "outline-light"}`}
        key={city}
        onClick={()=>handleCityChange(city) }>{city}</Button>
        ))}
      
    </div>
  )
}

export default WeatherButton