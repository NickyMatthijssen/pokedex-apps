import * as fs from "fs";
import { SpeciesList, Topbar } from "@/components";
import { ISimpleSpecies } from "@/services/interfaces";

export default async function Home() {
  const species = JSON.parse(
    fs.readFileSync(`./assets/data/species-collection.json`).toString()
  ) as ISimpleSpecies[];

  return (
    <>
      <Topbar />

      <SpeciesList species={species} />
    </>
  );
}
