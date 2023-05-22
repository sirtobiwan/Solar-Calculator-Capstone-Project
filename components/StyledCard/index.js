import styled from "styled-components";

export const StyledCard = styled.article`
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

export const StyledCardContent = styled.div`
background-color: #ffffff;
border-radius: 20px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 2rem;
margin: 0.3rem;
align-items: center; 
justify-content: center; 
text-align: center;
`;