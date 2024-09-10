import { createContext, FC, ReactNode, useContext, useState } from "react";

import { UserContextType } from "../helpers/types";

export const UserContext = createContext<any>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({
  children,
}: {
  children: any;
}) => {
  const [userState, setUserState] = useState<UserContextType>({
    isScriptInjected: false,
  });

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserInfo = () => {
  return useContext(UserContext);
};
