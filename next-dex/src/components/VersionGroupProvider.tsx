"use client";

import { VersionGroup } from "@/services/constants";
import { createContext, useContext, useState } from "react";

type Props = React.PropsWithChildren & {};

type VersionGroupContextType = {
  group: VersionGroup;
  setGroup: (version: VersionGroup) => void;
};

export const VersionGroupContext = createContext<VersionGroupContextType>(
  {} as VersionGroupContextType
);

export function useVersionGroupContext() {
  return useContext(VersionGroupContext);
}

export function VersionGroupProvider({ children }: Props): React.ReactElement {
  const [group, setGroup] = useState<VersionGroup>("red-blue");

  return (
    <VersionGroupContext.Provider value={{ group, setGroup }}>
      {children}
    </VersionGroupContext.Provider>
  );
}
