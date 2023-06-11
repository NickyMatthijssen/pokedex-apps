"use client";

import { useSearchContext } from "@/components";

export function Search(): React.ReactElement {
  const { query, setQuery } = useSearchContext();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  return (
    <div className="search">
      <input className="search__input" value={query} onInput={handleInput} />
    </div>
  );
}
