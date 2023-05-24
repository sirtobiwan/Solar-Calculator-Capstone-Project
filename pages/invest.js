import CardInvest from "@/components/CardInvest";
import Button from "@/components/Button";
import styled from "styled-components";
import Navigation from "@/components/NavigationBar";

export default function Invest() {
  return (
    <>
      <Navigation/>
      <CardInvest/>
      <ButtonContainer>
        <Button href="/savings" text="Back" />
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
