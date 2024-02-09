import { render, screen } from "@testing-library/react";
import Homepage from "../index";
import Navbar from "scenes/navbar/Navbar";

test("renders Title text", () => {
  render(<Navbar title="Sociopedia" />);
  const headingElement = screen.getByText(/Welcome/i);
  expect(headingElement).toBeInTheDocument();
});
