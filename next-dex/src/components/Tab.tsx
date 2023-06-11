"use client";

import { getColorsByType } from "@/services/helpers";
import clsx from "clsx";
import { useMemo } from "react";
import { useSpeciesContext } from ".";

type Props = React.PropsWithChildren & {
  active?: boolean;
  onClick: () => void;
};

export function Tab({ children, active, onClick }: Props): React.ReactElement {
  const { currentVariant } = useSpeciesContext();

  const colors = useMemo(
    () =>
      Object.values(getColorsByType(currentVariant.types[0].name ?? "")).join(
        " "
      ),
    [currentVariant]
  );

  return (
    <button
      className={clsx("tabs__tab", { [`!bg-opacity-10 ${colors}`]: active })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
