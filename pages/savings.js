import Button from "@/components/Button";
import CardSavings from "@/components/CardSavings";
import styled from "styled-components";

export default function Savings() {
  return (
    <>
      <CardSavings />
      <ButtonContainer>
        <Button href="/radiation" text="Back" />
        <Button href="/invest" text="Next" />
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

