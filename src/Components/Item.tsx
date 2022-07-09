import { ItemCard } from "../Styles/Card";
import { ItemType } from "../Types/ItemType";

interface ItemProps {
  item: ItemType;
  setShow: (arg0: boolean) => void;
  setSelectedId: (arg0: string) => void;
}

export default function Item({ item, setShow, setSelectedId }: ItemProps) {
  const handleClick = () => {
    setShow(true)
    setSelectedId(item.id);
  };
  return (
    <ItemCard>
        <span> {item.title}</span>
        <img src={item.images.preview_gif.url} alt={item.title} />
        <button onClick={handleClick}>See More</button>
    </ItemCard>
  );
}
