import { Number, HideDivMobile, PaginationCard } from "../Styles/Pagination";
import { ItemType } from "../Types/ItemType";
import PaginationArrow from "./PaginationArrow";

interface PaginationProps {
  item?: ItemType;
  handleItemsToDisplay: (page: number) => void;
  numberOfPages: number;
  itemsToDisplay: number;
  itemsPerPage: number;
}

export default function Item({
  handleItemsToDisplay,
  itemsToDisplay,
  numberOfPages,
  itemsPerPage
}: PaginationProps) {
  const arrayPages = [];
  if (numberOfPages > 5) {
    for (let i = 0; i < numberOfPages; i++) {
      arrayPages.push(i);
    }
  }
  return (
    <PaginationCard>
      <PaginationArrow
        direction="left"
        disabled={itemsToDisplay === 0}
        method={() => handleItemsToDisplay(itemsToDisplay - itemsPerPage)}
      />
      <HideDivMobile>
        {arrayPages.map((el) => (
          <Number
            selected={(el + 1)*itemsPerPage === itemsToDisplay}
            key={el}
            onClick={() => handleItemsToDisplay((el + 1)*itemsPerPage)}
          >
            {el + 1}
          </Number>
        ))}
      </HideDivMobile>
      <PaginationArrow
        direction="right"
        method={() => handleItemsToDisplay(itemsToDisplay + itemsPerPage)}
        disabled={itemsToDisplay === numberOfPages}
      />
    </PaginationCard>
  );
}
