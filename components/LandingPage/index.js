import Button from "@/components/Button";
import Header from "@/components/Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LandingPage() {
  const [currentLocation, setCurrentLocation] = useState({});
  const [isLocationVisible, setIsLocationVisible] = useState(false);

  useEffect(() => {
    getLocation();
  }, []);

  // get Location from Api as json
  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrentLocation(location.data);
  };

  const handleLocationClick = () => {
    setIsLocationVisible((prevIsLocationVisible) => !prevIsLocationVisible);
  };

  return (
    <>
     
      <IntroContainer>
        <IntroParagraph>How much money can you save with a solar panel?</IntroParagraph>
        <IntroSubtext>Click below to find out!</IntroSubtext>
      </IntroContainer>
      <LocationContainer>
        <LocationButton onClick={handleLocationClick}>
          {isLocationVisible ? "Hide Your Location" : "Show Your Location"}
        </LocationButton>
        {isLocationVisible && currentLocation.city && (
          <LocationText>Your Location: {currentLocation.city}</LocationText>
        )}
      </LocationContainer>

    </>
  );
}

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`;

const IntroParagraph = styled.p`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

const IntroSubtext = styled.p`
  font-size: 16px;
  color: #777;
  margin: 10px 0 0 0;
  animation: pulse 2s infinite;
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const LocationButton = styled.button`
  background-color: #008080;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 20px; 
  font-weight: bold;
  padding: 8px 16px; 
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #007a8c;
  }
`;

const LocationText = styled.p`
  font-size: 20px; 
  font-weight: bold;
  margin: 0 0 8px 0; 
`;

