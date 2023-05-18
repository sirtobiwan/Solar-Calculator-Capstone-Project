import styled from "styled-components";
import { StyledCard, StyledCardContent } from "../StyledCard";
import ElectricityCosts from "../ElectricityCosts";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import { radiationAtom } from "../CardRadiation";
import { atom, useAtom } from 'jotai';

const StyledLabel = styled.label`
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
  top: 12rem;
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

export const savingsAtom = atom(null);

export default function CardSavings() {
  const [inputValue, setInputValue] = useState('');
  function handleInputChange (event){
    setInputValue(event.target.value)
  }
  
  const [radiationValue] = useAtom(radiationAtom);

  const savings = (inputValue * radiationValue).toFixed(2);

  const [savingsValue, setSavingsValue] = useAtom(savingsAtom);

  setSavingsValue(savings)
  
  return (
    <StyledCard>
      <StyledCardContent>
        <StyledLabel htmlFor="electricityCosts">Enter Electricity Costs per kWh:</StyledLabel>
        <StyledData><ElectricityCosts value={inputValue} onChangeInput={handleInputChange} /></StyledData>
      </StyledCardContent>
      <StyledCardContent>
        <StyledLabel htmlFor="test">Annual Radiation</StyledLabel>
        <StyledModal>
          <Modal
            text={
              <>
                <FontAwesomeIcon icon={faInfoCircle} />
              </>
            }
            modalContent={
              <>
                <h2>Radiation per Solar Panel </h2>
                <section>
                Based on a regular solar panel size of 1.700x1.000 mm with 400 Watt-Peak and a photovoltaic orientation of 30° south.
                </section>
              </>
            }
          />
        </StyledModal>
        <StyledData>{radiationValue !== null ? `${radiationValue} kWh` : 'Select a location'}</StyledData>
        
      </StyledCardContent>
      <StyledCardContent>
        <StyledLabel htmlFor="savings">Annual Savings</StyledLabel>
        <StyledData>
        {!inputValue ? 'Enter electricity costs' : !radiationValue ? 'Select a location' : `${savings} €`}
        </StyledData>
      </StyledCardContent>
    </StyledCard>
  );
}


