import { ImageSize } from "../Types/ItemType";
import { Card, TextBox, Text } from "../Styles/ModalItem";

interface ModalItemProps {
  imageType: ImageSize;
}

export default function ModalItem({ imageType }: ModalItemProps) {
  const { height, width, url } = imageType;
  if (height !== undefined && width !== undefined && url !== undefined) {
    const size = `${imageType.height} x ${imageType.width}`;

    return (
      <Card>
        <TextBox> <Text>Size: {size}</Text></TextBox>
        <img src={imageType.url} alt={size} />
      </Card>
    );
  } else {
    return null;
  }

}
