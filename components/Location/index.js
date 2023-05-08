
import { useEffect, useState } from "react";
import axios from "axios";

export default function Location (){
    //get location
const [currentLocation, setCurrentLocation] = useState({});

useEffect(() => {
  getLocation();
}, []);

  // get Location from Api as json with xios library.
  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrentLocation(location.data);
  };
    return (
    <p>{currentLocation.city}</p>
    )
}