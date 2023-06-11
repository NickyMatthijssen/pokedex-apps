"use client";

import { useSpeciesContext, Stat } from "@/components";

export function Stats(): React.ReactElement {
  const { currentVariant } = useSpeciesContext();

  return (
    <>
      <h2 className="text-left">Base stats</h2>

      <table className="details-table details-table--stats">
        <tbody>
          {currentVariant.stats.map((stat) => (
            <Stat stat={stat} key={stat.name} />
          ))}
        </tbody>
      </table>
    </>
  );
}
