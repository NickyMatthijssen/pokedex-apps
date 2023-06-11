import clsx from "clsx";
import { getColorsByType } from "@/services/helpers";

export function Type({ type }: { type: string }): React.ReactElement {
  const colors = getColorsByType(type);

  return <div className={clsx("type", colors.backgroundColor)}>{type}</div>;
}
