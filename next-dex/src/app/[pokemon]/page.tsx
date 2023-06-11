import {
  Header,
  SpeciesProvider,
  Variants,
  Gallery,
  Details,
  Stats,
  Moves,
  VersionGroups,
} from "@/components";
import { VersionGroupProvider } from "@/components/VersionGroupProvider";
import { ISimpleSpecies, ISpecies } from "@/services/interfaces";
import * as fs from "fs";

export function generateStaticParams() {
  const species = JSON.parse(
    fs.readFileSync(`./assets/data/species-collection.json`).toString()
  ) as ISimpleSpecies[];

  return species.slice(0, 6).map((species) => ({ pokemon: species.name }));
}

export default async function Pokemon({
  params: { pokemon },
}: {
  params: { pokemon: string };
}) {
  const species = JSON.parse(
    fs.readFileSync(`./assets/data/pokemon/${pokemon}.json`).toString()
  ) as ISpecies;

  return (
    <SpeciesProvider species={species}>
      <div className="layout">
        <div className="flex flex-col justify-center items-center mb-12">
          <Header />

          <Variants />
        </div>

        <div className="layout__grid">
          <div className="col-span-3">
            <Details />

            <br />
            <br />

            <Stats />
          </div>

          <div className="col-span-3">
            <Gallery />
          </div>

          <VersionGroupProvider>
            <div className="col-span-6">
              <VersionGroups />
            </div>

            <div className="col-span-6">
              <Moves />
            </div>
          </VersionGroupProvider>
        </div>
      </div>
    </SpeciesProvider>
  );
}
