import { createContext, FC, ReactNode, useContext, useState } from "react";

import { NmiContextType } from "../helpers/types";

export const NmiContext = createContext<any>(undefined);

export const NmiProvider: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: any;
}) => {
  const [nmiState, setNmiState] = useState<NmiContextType>({
    enteredNMIToken: "",
    validNmiToken: false,
    errorOnRequest: false,
  });

  return (
    <NmiContext.Provider value={{ nmiState, setNmiState }}>
      {children}
    </NmiContext.Provider>
  );
};

export const NmiInfo = () => {
  return useContext(NmiContext);
};
