import CardInvest from "@/components/CardInvest";
import Button from "@/components/Button";
import styled from "styled-components";

export default function Invest() {
  return (
    <>
      <CardInvest></CardInvest>
      <ButtonContainer>
        <Button href="/savings" text="Back" />
        <Button href="/" text="Next" />
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
