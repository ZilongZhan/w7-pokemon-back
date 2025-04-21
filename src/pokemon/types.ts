export interface PokemonStructure {
  id: string;
  pokeIndex: number;
  name: string;
  imageUrl: string;
  isCaptured: boolean;
  description: string;
  favoriteFood: string;
  habitat: string;
}

export type PokemonData = Omit<PokemonStructure, "id">;
