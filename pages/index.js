import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <IntroContainer>
      <IntroParagraph>
        How much money can you save with a solar panel?
      </IntroParagraph>
      <IntroSubtext>Click image below to find out!</IntroSubtext>
      <StyledLink href="/radiation">
        <StyledImage
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          alt="Solar Panel"
          width={200}
          height={200}
        />
      </StyledLink>
    </IntroContainer>
  );
}

const zoomIn = keyframes`
  0% {
    transform: scale(1) translateY(0);
    transform-origin: 50% 16%;
  }
  100% {
    transform: scale(1.25) translateY(-15px);
    transform-origin: top;
  }
`;

const StyledLink = styled(Link)``;

const StyledImage = styled(Image)`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  animation: ${zoomIn} 20s linear infinite;
  overflow: hidden;
  cursor: pointer;
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
`;

const IntroSubtext = styled.p`
  font-size: 16px;
  color: #777;
  margin: 50px 0 60px 0;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;