"use client";

import { createContext, useContext, useState } from "react";

type SearchContextType = {
  query: string;
  setQuery: (query: string) => void;
};

const SearchContext = createContext<SearchContextType>({} as SearchContextType);

export function useSearchContext(): SearchContextType {
  return useContext(SearchContext);
}

export function SearchProvider({
  children,
}: React.PropsWithChildren): React.ReactElement {
  const [query, setQuery] = useState<string>("");

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
