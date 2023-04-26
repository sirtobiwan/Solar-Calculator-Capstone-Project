import { useRouter } from "next/router";
import styled from 'styled-components';

export default function ButtonNext() {
    const router = useRouter();
  
    const handleClick = () => {
      router.push('/');
    };
  
    return (
      <StyledButton onClick={handleClick}>
        Go to Previous Page
      </StyledButton>
    );
  }

  const StyledButton = styled.button`
  background-color: #f5a623;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #e6951d;
  }
`;