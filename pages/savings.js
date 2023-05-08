import Button from "@/components/Button";
import CardSavings from "@/components/CardSavings";
import styled from "styled-components";

export default function Savings() {
  return (
    <>
      <CardSavings></CardSavings>
      <ButtonContainer>
        <Button href="/radiation" text="Back" />
        <Button href="/" text="Next" />
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
