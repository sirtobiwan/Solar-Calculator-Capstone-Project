import styled from "styled-components";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import { Button } from "react-bootstrap";
import { savingsAtom } from "../CardSavings";
import { useAtom } from 'jotai';

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
  padding: 1rem;
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
  top: 2rem;
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

const StyledInvestmentCost = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
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

  button {
    margin: 0 0.5rem;
  }
`;

const StyledCheckbox = styled.div`
  display: block;
  margin: 10px auto 0;
  width: 100px;
  border: 1px solid #ccc;
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

export default function CardInvest() {
  const [panelCount, setPanelCount] = useState(1);
  const [isGermanyInvestment, setIsGermanyInvestment] = useState(false);

  const calculateInvestmentCost = () => {
    const baseCost = 900;
    const discountPercent = 3;
    const discountFactor = 1 - discountPercent / 100;
    const adjustedPanelCount = panelCount - 1;
    return Math.round(baseCost * Math.pow(discountFactor, adjustedPanelCount));
  };

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
      <StyledContent>
        <StyledInvestmentCost>
          <StyledLabel>Investment cost for:</StyledLabel>
          <br />
          <StyledPanelButtons>
            <Button onClick={decreasePanelCount}>-</Button>
            <StyledPanelCount>{panelCount}</StyledPanelCount>
            <Button onClick={increasePanelCount}>+</Button>
          </StyledPanelButtons>
          <br />
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
                <h2> Average Investment Costs</h2>
                <section>
                  Based on a regular solar panel size of 1.700x1.000 mm with 400
                  Wp including battery.
                </section>
              </>
            }
          />
        </StyledModal>
      </StyledContent>
      <StyledContent>
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
</StyledContent>

      <StyledContent>
        <StyledLabel>Return of Invest</StyledLabel>
        <StyledData>
        {returnOfInvest !== "Infinity" ? `${returnOfInvest} years` : "Select a location"}
          </StyledData>
      </StyledContent>
    </StyledCard>
  );
}

