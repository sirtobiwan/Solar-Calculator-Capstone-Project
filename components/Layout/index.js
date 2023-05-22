import styled from 'styled-components';

export default function Layout() {
  return (
    <StyledHeader>
      <h1>My Solar Calculator</h1>
    </StyledHeader>
  );
}


const StyledHeader = styled.header`
  background-color: #008080;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  h1 {
    font-size: 2rem;
    margin: 0;
  }

  span {
    font-size: 1.2rem;
    margin-right: 1rem;
  }
`;
