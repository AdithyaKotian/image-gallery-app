/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import type { ReactNode } from "react";

type ImageType = {
  id: string;
  author: string;
  download_url: string;
};

type ContextType = {
  saved: ImageType[];
  setSaved: React.Dispatch<React.SetStateAction<ImageType[]>>;
};

export const AppContext = createContext<ContextType | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [saved, setSaved] = useState<ImageType[]>([]);

  return (
    <AppContext.Provider value={{ saved, setSaved }}>
      {children}
    </AppContext.Provider>
  );
};