"use client";

import { createContext, useContext, useMemo, useState } from "react";

const formContext = createContext({
  form: null,
  name: "",
  changeForm: (index: number) => {},
});

export function useFormContext() {
  return useContext(formContext);
}

export default function FormProvider({
  children,
  forms,
}: React.PropsWithChildren) {
  const [form, setForm] = useState(forms[0]);

  const changeForm = (index: number) => setForm(forms[index]);

  const name = useMemo(
    () => form?.forms[0]?.names[0]?.name ?? "DEFAULT",
    [form]
  );

  return (
    <formContext.Provider
      value={{
        form,
        name,
        changeForm,
      }}
    >
      {children}
    </formContext.Provider>
  );
}
