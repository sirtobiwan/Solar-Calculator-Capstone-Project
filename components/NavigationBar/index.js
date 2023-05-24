import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NavigationBar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #f1f1f1;
  padding: 10px;
`;

const NavItem = styled.p`
  position: relative;
  padding: 10px;
  margin: 0 10px;
  color: #888;
  cursor: pointer;
  font-weight: normal;
  text-decoration: none !important;

  &:hover {
    color: #333;
  }
`;

export default function Navigation() {
  return (
    <NavigationBar>
      <Link href="/radiation">
        <NavItem>
        Location
        </NavItem>
      </Link>
      <Link href="/savings">
        <NavItem>
          Savings
        </NavItem>
      </Link>
      <Link href="/invest">
        <NavItem>
          Invest
        </NavItem>
      </Link>
    </NavigationBar>
  );
}

