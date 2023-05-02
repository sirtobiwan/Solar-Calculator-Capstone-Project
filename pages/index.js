
import Button from '@/components/Button';
import Header from '@/components/Header';
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
//own Button Container for the button to show up left and right on the screen. It needs to wrap the button here and cannot be in the button components itself as it would be rendered twice as flexbox and then won't work
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;