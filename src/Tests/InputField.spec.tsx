import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputField from "../Components/InputField";

const handleInput = () => {};

it("Input Field element visible", () => {
  render(<InputField dataTestId="input-field" placeholder="test" handleInput={handleInput} />);
  expect(screen.getByTestId("input-field")).toBeVisible();
});

it("Allows me to type my first name in the input field", () => {
  render(<InputField dataTestId="input-field" placeholder="test" handleInput={handleInput} />);
  userEvent.type(screen.getByTestId("input-field"), "First Name");
});
