import styled from "styled-components";
import Modal from "@/components/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


const StyledCard = styled.article`
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  max-width: 800px;
  overflow: hidden;
  position: relative;
`;

const StyledLocation = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-basis: 50%;
  padding: 1.5rem;
`;

const StyledLabel = styled.h2`
  color: #666666;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const StyledData = styled.p`
  font-size: 2rem;
  font-weight: bold;
  padding-top: 0.5rem;
  position: relative;
`;

const StyledRadiation = styled.span`
  font-size: 0.8rem;
  position: absolute;
  bottom: 0rem;
  right: 0.2rem;
  background-color: #f5a623;
  border-radius: 5px;
  color: white;
  padding: 0.25rem 0.5rem;
  transition: background-color 0.3s ease;
  &:hover {
  background-color: #e6951d;
  border: none;
  padding: 0.4rem 0.65rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

`
  display: inline-block;
  background-color: #f5a623;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #e6951d;
  }
`;

const StyledImage = styled.img`
  margin-left: 1rem;
  width: 70%;
  height: 70%;
`;

export default function Card() {
  return (
    <StyledCard>
      <StyledLocation>
        <StyledLabel>Location</StyledLabel>
        <StyledData>Frankfurt</StyledData>
      </StyledLocation>
      <StyledLocation>
        <StyledLabel>Annual Radiation</StyledLabel>
        <StyledData>200 kWh/m²</StyledData>
        <StyledRadiation>
          <Modal
            text={
              <>
                <FontAwesomeIcon icon={faAngleDown} /> radiation in ghi
               </>
                }
            modalContent={
              <>
                <h2>Radiation in GHI </h2>
                <p>
                  Global Horizontal Irradiance (GHI) is the total solar
                  radiation incident on a horizontal surface. It is the sum of
                  Direct Normal Irradiance (DNI), Diffuse Horizontal Irradiance,
                  and ground-reflected radiation.
                </p>
                <StyledImage src="/ghi.gif" alt="description" />
              </>
            }
          />
        </StyledRadiation>
      </StyledLocation>
    </StyledCard>
  );
}
