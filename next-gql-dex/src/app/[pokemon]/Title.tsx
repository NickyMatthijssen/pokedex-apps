"use client";

import { useFormContext } from "./FormProvider";

export default function Title(): React.ReactNode {
  const { name } = useFormContext();

  return (
    <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-6">
      {name}
    </h1>
  );
}
