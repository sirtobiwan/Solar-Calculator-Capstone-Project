import Button from "@/components/Button";
import Header from "@/components/Header";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <Header />

      <p>Enter your Location:</p>
      <ButtonContainer>
        <Button href="/radiation" text="Next" />
      </ButtonContainer>
    </>
  );
}
//flex cannot be at button container as it would render twice
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
