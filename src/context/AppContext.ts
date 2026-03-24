import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export interface ImageType {
  id: string;
  author: string;
  download_url: string;
}

export interface ContextType {
  saved: ImageType[];
  setSaved: Dispatch<SetStateAction<ImageType[]>>;
}

export const AppContext = createContext<ContextType>({
  saved: [],
  setSaved: () => {},
});