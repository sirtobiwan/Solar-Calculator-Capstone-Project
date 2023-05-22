import { render, screen } from '@testing-library/react';
import Button from '../Button';

test('rendert den Button mit dem korrekten Link und Text', () => {
  const href = 'http://localhost:3000/savings';
  const text = 'next';

  render(<Button href={href} text={text} />);

  const buttonElement = screen.getByRole('link', { name: text });

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute('href', href);
});
