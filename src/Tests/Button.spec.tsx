import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../Components/Button"

it('Button element visible', () => {
  render(<Button dataTestId="button" name="test"/>)
  expect(screen.getByTestId("button")).toBeVisible()
})

it('Allows me to click in the button', () => {
  render(<Button  dataTestId="button" name="test"/>)
  userEvent.click(screen.getByTestId("button"))
})