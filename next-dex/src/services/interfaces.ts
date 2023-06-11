export interface IModel {
  id: number;
  name: string;
}

export interface ISimpleSpecies extends IModel {
  types: IType[];
}

export interface ISpecies extends IModel {
  base_happiness: number;
  capture_rate: 45;
  flavor_text_entries: Array<IFlavorText & { version: string }>;
  forms_switchable: boolean;
  gender_rate: number;
  genus: string;
  has_gender_differences: boolean;
  hatch_counter: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  order: number;
  varieties: IPokemon[];
}

export interface IPokemon extends IModel {
  base_experience: number;
  weight: number;
  height: number;
  is_default: boolean;
  abilities: Array<{
    slot: number;
    is_hidden: boolean;
    ability: IAbility;
  }>;
  moves: Array<IPokemonMove>;
  types: Array<IType>;
  stats: Array<IStat>;
}

export interface IType {
  sort: number;
  name: string;
}

export type StatName =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed";

export interface IStat {
  name: StatName;
  base_stat: number;
  effort: number;
}

export interface IPokemonMove {
  move: IMove;
  versions: Array<{
    level_learned_at: number;
    move_learn_method: string;
    version_group: string;
  }>;
}

export interface IMove extends IModel {
  accuracy: number;
  pp: number;
  priority: number;
  power: number;
  contest_type?: string;
  damage_class: string;
  effect?: string;
  short_effect?: string;
  type: Omit<IType, "sort">;
  flavor_text_entries: string[];
}

export interface IAbility extends IModel {
  effect: string;
  short_effect: string;
  flavor_text_entries: string[];
}

export interface IFlavorText {
  flavor_text: string;
  version_group: string;
}
