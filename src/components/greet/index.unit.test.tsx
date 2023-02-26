import { render, screen } from "@testing-library/react";
import { Greet } from ".";

test("Greet renders", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);

  expect(textElement).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name="Habib" />);
  const textElement = screen.getByText(/hello Habib/i);

  expect(textElement).toBeInTheDocument();
});
