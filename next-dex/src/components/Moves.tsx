"use client";

import { useSpeciesContext, Tabs, Tab } from "@/components";
import { LearnMethod, LEARN_METHODS } from "@/services/constants";
import { IPokemonMove } from "@/services/interfaces";
import { useState } from "react";
import { useMemo } from "react";
import { MoveRow } from "./MoveRow";
import { MovesTable } from "./MovesTable";
import { useVersionGroupContext } from "./VersionGroupProvider";

export function Moves(): React.ReactElement {
  const { group } = useVersionGroupContext();
  const [currentMethod, setCurrentMethod] = useState<LearnMethod>("level-up");

  const { currentVariant } = useSpeciesContext();
  const moves = useMemo(
    () =>
      currentVariant.moves.filter((pokemonMove: IPokemonMove) =>
        pokemonMove.versions.some(
          (version) =>
            version.version_group === group &&
            version.move_learn_method === currentMethod
        )
      ),
    [currentVariant, group, currentMethod]
  );

  return (
    <div>
      <h2>Moves</h2>

      <Tabs>
        {Object.keys(LEARN_METHODS).map((method) => (
          <Tab
            onClick={() => setCurrentMethod(method as LearnMethod)}
            active={method === currentMethod}
            key={method}
          >
            {LEARN_METHODS[method as LearnMethod]}
          </Tab>
        ))}
      </Tabs>

      <br />

      <MovesTable>
        {moves.map((move: IPokemonMove) => (
          <MoveRow key={move.move.name} move={move} />
        ))}
      </MovesTable>
    </div>
  );
}
