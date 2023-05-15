import styled from "styled-components";
import Modal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";
import { atom, useAtom } from 'jotai';

const locations = [
  
  { id: 1, name: 'Berlin', radiation:  100 },
  { id: 2, name: 'Capetown', radiation: 170 },
  { id: 3, name: 'Frankfurt', radiation: 246  },
  { id: 4, name: 'Madrid', radiation: 120 },
  { id: 5, name: 'New York', radiation: 140 },
  { id: 6, name: 'Paris', radiation: 110 },
  { id: 7, name: 'Rio de Janeiro', radiation: 150 },
  { id: 8, name: 'Rome', radiation: 130 },
  { id: 9, name: 'Sydney', radiation: 160 },
  { id: 10, name: 'Tokyo', radiation: 180 },
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
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-basis: 50%;
  padding: 1.5rem;
  align-items: center; 
  justify-content: center; 
  text-align: center;
`;

const StyledLabel = styled.h2`
  color: #666666;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const StyledData = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-top: 0.5rem;
  position: relative;
`;

const StyledModal = styled.span`
font-size: 0.8rem;
  display: flex;
  position: absolute;
  right: 2rem;
  top: 11rem;
  background-color: #f5a623;
  border-radius: 5px;
  color: white;
  padding: 0.25rem 0.5rem;
  transition: background-color 0.3s ease;

  //hover on/off for mobile/desktop

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