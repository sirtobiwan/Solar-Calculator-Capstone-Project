import styled from "styled-components";

const StyledCard = styled.article`
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  max-width: 800px;
  overflow: hidden;
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
      </StyledLocation>
    </StyledCard>
  );
}
