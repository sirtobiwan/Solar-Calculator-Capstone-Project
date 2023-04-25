import { render, screen } from "@testing-library/react";
import HomePage from "../pages/index";

test("renders next greeting headline", () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/hello from next.js/i);
  expect(linkElement).toBeInTheDocument();
});
