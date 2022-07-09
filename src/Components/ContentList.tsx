import { GridWrapper } from "../Styles/ContentList";
import { ItemType } from "../Types/ItemType";
import Item from "./Item";

interface ContentListProps {
  items: ItemType[];
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedId: React.Dispatch<React.SetStateAction<string>>;
}

export default function ContentList({ items, setShow, setSelectedId }: ContentListProps) {
  return (
    <GridWrapper>
      {
        items.length > 0
          ? items.map((item, index) => <Item key={index} item={item} setShow={setShow} setSelectedId={setSelectedId} />)
          : null // add message handling
      }
    </GridWrapper>
  );
}
