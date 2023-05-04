
import Header from "@/components/Header";
import Card from "@/components/CardRadiation";
import Button from "@/components/Button";
import styled from "styled-components";

export default function RadiationResult() {
  
  
  return (
    <>
      <Header />
      <Card ></Card>
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
