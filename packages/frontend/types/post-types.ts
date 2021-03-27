import { Image } from "./common-types";
export interface Post {
  id: number;
  title: string;
  body: string;
  published_at: string;
  cover: Image;
  slug: string;
}
