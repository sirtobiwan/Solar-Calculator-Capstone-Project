import CardRadiation from "@/components/CardRadiation";
import Button from "@/components/Button";
import styled from "styled-components";

export default function RadiationResult() {
  return (
    <>
      <CardRadiation></CardRadiation>
      <ButtonContainer>
        <Button href="/" text="Back" />
        <Button href="/savings" text="Next" />
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
