"use client";

import { formatPokmonName } from "@/services/helpers";
import { useRouter } from "next/navigation";
import { useSpeciesContext } from ".";

export function Header(): React.ReactElement {
  const { species, currentVariant } = useSpeciesContext();

  const router = useRouter();
  const backHandler = () => router.back();

  const name = formatPokmonName(currentVariant.name);

  return (
    <div className="header">
      <button className="header__back" type="button" onClick={backHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div>
        <span className="header__eyebrow">{species.genus}</span>
        <h1>{name}</h1>
      </div>
    </div>
  );
}
