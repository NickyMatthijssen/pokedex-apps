"use client";

import { useFormContext } from "./FormProvider";

export default function Sprite(): React.ReactNode {
  const { form } = useFormContext();

  return (
    <div>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${form.id}.png`}
      />
    </div>
  );
}
