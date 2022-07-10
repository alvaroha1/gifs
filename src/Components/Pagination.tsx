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
  itemsPerPage,
}: PaginationProps) {
  const arrayPages = [];
    for (let i = 0; i < numberOfPages; i++) {
      arrayPages.push(i);
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
            selected={el * itemsPerPage === itemsToDisplay}
            key={el}
            onClick={() => handleItemsToDisplay(el * itemsPerPage)}
          >
            {el + 1}
          </Number>
        ))}
      </HideDivMobile>
      <PaginationArrow
        direction="right"
        method={() => handleItemsToDisplay(itemsToDisplay + itemsPerPage)}
        disabled={Math.ceil(itemsToDisplay / itemsPerPage)+1 === numberOfPages}
      />
    </PaginationCard>
  );
}
