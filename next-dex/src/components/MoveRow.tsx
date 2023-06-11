"use client";

import { IPokemonMove } from "@/services/interfaces";
import { useState } from "react";
import { Type } from "@/components";

export function MoveRow({ move }: { move: IPokemonMove }): React.ReactElement {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => setIsToggled(!isToggled);

  return (
    <>
      <tr onClick={toggleHandler}>
        <td>Level</td>
        <td>{move.move.name}</td>
        <td>
          <Type type={move.move.type.name} />
        </td>
        <td>{move.move.damage_class}</td>
        <td>{move.move.power}</td>
        <td>{move.move.pp}</td>
        <td>{move.move.accuracy}</td>
        <td>{move.move.priority}</td>
      </tr>
      {isToggled && (
        <tr>
          <td colSpan={7}></td>
        </tr>
      )}
    </>
  );
}
