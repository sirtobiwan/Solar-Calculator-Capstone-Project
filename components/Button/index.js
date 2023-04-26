import Link from "next/link";
import styled from "styled-components";

export default function Button({ href, text }) {
  return <StyledButton href={href}>{text}</StyledButton>;
}

const StyledButton = styled(Link)`
  display: inline-block;
  background-color: #f5a623;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #e6951d;
  }
`;
