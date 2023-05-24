import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <IntroContainer>
      <StyledImage
        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
        alt="Solar Panel"
        layout="responsive"
        width={1172}
        height={880}
      />
      <IntroParagraph>Escape high electricity prices!</IntroParagraph>
      <IntroText>Generate your own sustainable power with solar panels.</IntroText>
      <StyledButton href="/radiation">Start Solar Calculator Now</StyledButton>
    </IntroContainer>
  );
}

const StyledImage = styled(Image)`
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`;

const IntroParagraph = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const IntroText = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #777;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled(Link)`
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

  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`