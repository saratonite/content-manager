export interface Image {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  url: string;
  previewUrl: string;
  formats: ImageFormats;
}

export interface ImageFormats {
  thumbnail: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  large: ImageFormat;
}
export interface ImageFormat {
  name: string;
  url: string;
}
