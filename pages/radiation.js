import CardRadiation from "@/components/CardRadiation";
import Button from "@/components/Button";
import styled from "styled-components";
import Navigation from "@/components/NavigationBar";

export default function RadiationResult() {
  return (
    <>
      <Navigation/>
      <CardRadiation/>
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
