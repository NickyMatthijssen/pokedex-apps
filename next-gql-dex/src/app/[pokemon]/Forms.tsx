"use client";

import clsx from "clsx";
import { useFormContext } from "./FormProvider";

export default function Forms({ forms }): React.ReactNode {
  const { changeForm, form } = useFormContext();

  return (
    <div className="flex flex-wrap">
      {forms.map((_, index) => (
        <button
          className={clsx("font-medium text-sm py-2 px-3 rounded-md mr-4", {
            "bg-indigo-100 text-indigo-700": _.id === form.id,
          })}
          onClick={() => changeForm(index)}
        >
          FORM
        </button>
      ))}
    </div>
  );
}
