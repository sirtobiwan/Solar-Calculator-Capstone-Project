import styled from "styled-components";
import Modal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";
import { atom, useAtom } from 'jotai';

const locations = [
  
  { id: 1, name: 'Berlin', radiation:  220 },
  { id: 2, name: 'Capetown', radiation: 270 },
  { id: 3, name: 'Frankfurt', radiation: 246  },
  { id: 4, name: 'Madrid', radiation: 275 },
  { id: 5, name: 'New York', radiation: 244 },
  { id: 6, name: 'Paris', radiation: 210 },
  { id: 7, name: 'Rio de Janeiro', radiation: 310 },
  { id: 8, name: 'Rome', radiation: 290 },
  { id: 9, name: 'Sydney', radiation: 295 },
  { id: 10, name: 'Tokyo', radiation: 235 },
];


const StyledCard = styled.article`
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2rem auto;
  max-width: 800px;
  overflow: hidden;
  position: relative;
  padding: 1rem
`;

const StyledContent = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 0.3rem;
  align-items: center; 
  justify-content: center; 
  text-align: center;
`;

const StyledLabel = styled.h2`
  color: #666666;
  font-size: 1rem;
  margin: 0.2rem;
  text-transform: uppercase;
`;

const StyledData = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-top: 0.7rem;
  position: relative;
`;

const StyledModal = styled.span`
  font-size: 0.8rem;
  display: flex;
  position: absolute;
  right: 2rem;
  top: 15rem;
  background-color: #f5a623;
  border-radius: 5px;
  color: white;
  padding: 0.25rem 0.5rem;
  transition: background-color 0.3s ease;


  @media (hover: hover) {
    &:hover:enabled {
      background-color: #e6951d;
      border: none;
      padding: 0.4rem 0.65rem;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  @media (hover: none) {
    &:active:enabled {
      background-color: #e6951d;
    }
  }

  &:hover {
    background-color: #e6951d;
    border: none;
    padding: 0.4rem 0.65rem;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const StyledImage = styled(Image)`
  width: 50%;
  height: auto;
  padding: 10px;
`;

const StyledDropdown = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  text-align: center;
`;

const StyledInfo = styled.div`
  color: #666666;
  font-size: 0.6rem;
  margin: 0.8rem;
  text-align: center;
`;

export const radiationAtom = atom(null);

export default function CardRadiation() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [radiation, setRadiation] = useAtom(radiationAtom);

  const handleLocationChange = (event) => {
    const selectedLocation = event.target.value;
    setSelectedLocation(selectedLocation);
    const selectedRadiation = locations.find(
      (location) => location.name === selectedLocation
    )?.radiation;
    setRadiation(selectedRadiation);

  
  };

  return (
    <StyledCard>
      <StyledContent>
        <StyledLabel>Your Location</StyledLabel>
        <StyledData>
          <StyledDropdown value={selectedLocation} onChange={handleLocationChange}>
            <option value="">-- Select Location --</option>
            {locations.map((location) => (
              <option key={location.id} value={location.name}>
                {location.name}
              </option>
            ))}
          </StyledDropdown>
        </StyledData>
        <StyledInfo>The location will be used to estimate the annual sun exposure (solar radiation),
          which will be used for further calculations</StyledInfo>
      </StyledContent>
      <StyledContent>
        <StyledLabel>Annual Radiation per Solar Panel</StyledLabel>
        <StyledData>
          {radiation !== null ? `${radiation} kWh` : 'Select a location'}
        </StyledData>
        <StyledModal>
          <Modal
            text={
              <>
                <FontAwesomeIcon icon={faInfoCircle} />
              </>
            }
            modalContent={
              <>
                <h2>Radiation in GHI </h2>
                <section>
                  Global Horizontal Irradiance (GHI) is the total solar
                  radiation incident on a horizontal surface. It is the sum of
                  Direct Normal Irradiance (DNI), Diffuse Horizontal Irradiance,
                  and ground-reflected radiation.
                </section>
                <StyledImage
                  src="/ghi.gif"
                  alt="My Image"
                  width={500}
                  height={300}
                />
              </>
            }
          />
        </StyledModal>
      </StyledContent>
    </StyledCard>
  );
}