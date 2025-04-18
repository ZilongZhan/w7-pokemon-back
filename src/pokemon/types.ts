export interface PokemonStructure {
  id: string;
  pokeIndex: number;
  name: string;
  imageUrl: string;
  isCaptured: boolean;
}

export type PokemonData = Omit<PokemonStructure, "id">;
