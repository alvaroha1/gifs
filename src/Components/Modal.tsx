import { useEffect } from "react";
import {
  Background, Body, ButtonDiv, Content, Padding, Title
} from "../Styles/Modal";
import { ItemType } from "../Types/ItemType";
import ModalItem from "./ModalItem";

interface ModalProps {
  setShow: (arg0: boolean) => void;
  show: boolean;
  selectedGif: ItemType | undefined;
}
export default function Modal({ setShow, show, selectedGif }: ModalProps) {
  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if ((e.charCode || e.keyCode) === 27) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  if (!show) {
    return null;
  }

  let imageTypes = [];
  if (selectedGif?.images !== undefined) {
    imageTypes = Object.values(selectedGif?.images);
  }

  return (
    <Background onClick={() => setShow(false)}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Padding>
          <Title>{selectedGif?.title}</Title>
        </Padding>
        <Body>
          {imageTypes.map((imageType) => (
            <ModalItem key={imageType.url} imageType={imageType} />
          ))}
        </Body>
        <Padding>
          <ButtonDiv onClick={() => setShow(false)}>Close modal</ButtonDiv>
        </Padding>
      </Content>
    </Background>
  );
}
