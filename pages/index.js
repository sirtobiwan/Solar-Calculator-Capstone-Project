import Button from "@/components/Button";
import Header from "@/components/Header";
import styled from "styled-components";
import LandingPage from "@/components/LandingPage";

export default function HomePage() {


  return (
    <>
      <Header />
      <LandingPage/>
      <ButtonContainer>
        <Button href="/radiation" type="submit" text="Start" />
      </ButtonContainer>
    </>
  );
}


const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
