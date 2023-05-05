import Button from "@/components/Button";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <IntroContainer>
        <IntroParagraph>
          How much money can you save with a solar panel?
        </IntroParagraph>
        <IntroSubtext>Click below to find out!</IntroSubtext>
      </IntroContainer>
      <ButtonContainer>
        <Button href="/radiation" text="Start" />
      </ButtonContainer>
    </>
  );
}

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
  margin: 10px 0 0 0;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
