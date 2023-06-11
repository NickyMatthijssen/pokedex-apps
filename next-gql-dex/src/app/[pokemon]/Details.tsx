"use client";

import { useFormContext } from "./FormProvider";

export default function Details({
  children,
}: React.PropsWithChildren): React.ReactNode {
  const { form } = useFormContext();

  return (
    <table>
      {children}
      <tr>
        <td>Height</td>
        <td>{form.height}</td>
      </tr>
      <tr>
        <td>Width</td>
        <td>{form.width}</td>
      </tr>
      <tr>
        <td>Type</td>
        <td>type</td>
      </tr>
    </table>
  );
}
