"use client";

export default function PokemonGrid({
  children,
}: React.PropsWithChildren): React.ReactElement {
  return <div className="grid grid-cols-5 container">{children}</div>;
}
