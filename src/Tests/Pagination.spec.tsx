import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Pagination from "../Components/Pagination";

// Based in the example from the video
describe("test Pagination component", () => {
  test("First and Last button work as expected", async () => {
    // Arrange
    const numberOfPages = 10;
    const itemsToDisplay = 40;
    const handleItemsToDisplay = jest.fn();
    const itemsPerPage = 40;
    render(
      <Pagination
        handleItemsToDisplay={handleItemsToDisplay}
        numberOfPages={numberOfPages}
        itemsToDisplay={itemsToDisplay}
        itemsPerPage={itemsPerPage}
      />
    );

    // Act
    fireEvent.click(screen.getByTestId("btn-minus-one"));

    // Assert
    expect(handleItemsToDisplay).toBeCalledTimes(1);
    expect(handleItemsToDisplay).toHaveBeenCalledWith(0);

    // Act
    fireEvent.click(screen.getByTestId("btn-plus-one"));

    // Assert
    expect(handleItemsToDisplay).toBeCalledTimes(2);
    expect(handleItemsToDisplay).toHaveBeenCalledWith(80);
  });
});
