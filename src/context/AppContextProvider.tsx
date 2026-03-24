import { useState } from "react";
import { AppContext, type ImageType } from "./AppContext";

interface Props {
  children: React.ReactNode;
}

function AppContextProvider({ children }: Props) {
  const [saved, setSaved] = useState<ImageType[]>([]);

  return (
    <AppContext.Provider value={{ saved, setSaved }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;