import styled, { keyframes } from "styled-components";
import { StyledCard, StyledCardContent } from "../StyledCard";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import { savingsAtom } from "../CardSavings";
import { useAtom } from 'jotai';




const StyledLabel = styled.label`
  color: #666666;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const StyledData = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 0.5rem;
  position: relative;
`;

const StyledModal = styled.span`
  font-size: 0.8rem;
  display: flex;
  position: absolute;
  right: 2rem;
  top: 2rem;
  background-color: var(--primary-background);
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

const StyledInvestmentCost = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const StyledPanelCount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 1rem;
`;

const StyledPanelButtons = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-bottom: 1rem;

  button {
    margin: 0 0.5rem;
    background-color:var(--primary-background);
    border-radius: 5px;
    color: white;
    border: 2px solid var(--primary-background);
  }
`;

const StyledCheckbox = styled.div`
  display: block;
  border-radius: 5px;
  margin: 10px auto 0;
  width: 100px;
  border: 1px solid var(--primary-background);
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${(props) => (props.checked ? "#ccc" : "transparent")};
  color: ${(props) => (props.checked ? "#fff" : "#000")};
`;

const StyledGovernmentSupport = styled.div`
  font-size: 1rem;
  margin-top: 1rem;
  text-align: center;
  color: #666666;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const ColoredSunIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  animation: ${rotateAnimation} 7s linear infinite;
`;

export default function CardInvest() {
  const [panelCount, setPanelCount] = useState(1);
  const [isGermanyInvestment, setIsGermanyInvestment] = useState(false);

  const calculateInvestmentCost = () => {
    const baseCost = 900;
    const discountPercent = Math.min(0.5 * (panelCount - 1), 50);
    const discountFactor = 1 - discountPercent / 100;
    return Math.round(baseCost * discountFactor);
  }; //0,5% discount for any additional solar panel up to 50%

  const investmentCost = panelCount * calculateInvestmentCost();

  const increasePanelCount = () => {
    setPanelCount(panelCount + 1);
  };

  const decreasePanelCount = () => {
    if (panelCount > 1) {
      setPanelCount(panelCount - 1);
    }
  };

  const [savingsValue] = useAtom(savingsAtom);

  const returnOfInvest = isGermanyInvestment ? ((investmentCost/panelCount / savingsValue) * 0.81).toFixed(1) : (investmentCost / panelCount / savingsValue).toFixed(1);

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledInvestmentCost>
          <StyledLabel>Investment cost for:</StyledLabel>
          <StyledPanelButtons>
            <button onClick={decreasePanelCount}>-</button>
            <StyledPanelCount>{panelCount}</StyledPanelCount>
            <button onClick={increasePanelCount}>+</button>
          </StyledPanelButtons>
          <StyledLabel>solar panel</StyledLabel>
        </StyledInvestmentCost>
        <StyledData>{investmentCost} Euro</StyledData>
        <StyledModal>
          <Modal
            text={
              <>
                <FontAwesomeIcon icon={faInfoCircle} />
              </>
            }
            modalContent={
              <>
                 <ColoredSunIcon src="/sonne.png" alt="Colored Sun Icon" />
                <h2> Average Investment Costs</h2>
                <section>
                  Based on a regular solar panel size of 1.700x1.000 mm with 400
                  Wp including battery.
                </section>
              </>
            }
          />
        </StyledModal>
      </StyledCardContent>
      <StyledCardContent>
  <StyledLabel>Is your investment in Germany?</StyledLabel>
  <StyledCheckbox
    onClick={() => setIsGermanyInvestment(false)}
    checked={!isGermanyInvestment}
  >
    No
  </StyledCheckbox>
  <StyledCheckbox
    onClick={() => setIsGermanyInvestment(true)}
    checked={isGermanyInvestment}
  >
    Yes
  </StyledCheckbox>
  {isGermanyInvestment && (
    <StyledGovernmentSupport>Receive 19% Government Support</StyledGovernmentSupport>
  )}
</StyledCardContent>

      <StyledCardContent>
        <StyledLabel>Return of Invest</StyledLabel>
        <StyledData>
        {returnOfInvest !== "Infinity" ? `${returnOfInvest} years` : "Select a location"}
          </StyledData>
      </StyledCardContent>
    </StyledCard>
  );
}

