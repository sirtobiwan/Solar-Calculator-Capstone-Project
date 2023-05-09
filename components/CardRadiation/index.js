import styled from "styled-components";
import Modal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import RadiationData from "../RadiationData";
import Location from "../Location";


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


export default function CardRadiation() {


  
  return (
    <StyledCard>
      <StyledContent>
        <StyledLabel>Your Location</StyledLabel>
        <StyledData>Frankfurt</StyledData>
      </StyledContent>
      <StyledContent>
        <StyledLabel>Annual Radiation</StyledLabel>
        <StyledData><RadiationData/></StyledData>
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
        </StyledRadiation>
      </StyledContent>
    </StyledCard>
  );
}