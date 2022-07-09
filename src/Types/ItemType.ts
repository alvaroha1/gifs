export interface ItemType {
  title: string;
  images: Images;
  id: string;
}

export interface Images {
  preview_gif: ImageSize;
}

export interface ImageSize {
  height: string;
  size: string;
  url: string;
  width: string;
  frames?: string
}
