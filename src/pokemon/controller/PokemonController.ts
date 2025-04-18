import { Request, Response } from "express";
import Pokemon from "../Pokemon.js";
import { PokemonControllerStructure } from "./types.js";
import { PokemonData } from "../types.js";

class PokemonController implements PokemonControllerStructure {
  constructor(private pokemons: Pokemon[]) {}

  public getAllPokemons = (_req: Request, res: Response): void => {
    res.status(200).json({ pokemons: this.pokemons });
  };

  public addPokemon = (req: Request, res: Response): void => {
    const pokemonData = req.body as PokemonData;

    const pokemonExists = this.pokemons.some(
      (pokemon) => pokemon.name === pokemonData.name,
    );

    if (pokemonExists) {
      res.status(409).json({ error: "Pokemon already exists" });
      return;
    }

    const pokemon = new Pokemon(pokemonData);

    this.pokemons.push(pokemon);

    res.status(201).json(pokemon);
  };

  public removePokemonById = (req: Request, res: Response): void => {
    const { pokemonId } = req.params;

    const pokemonExists = this.pokemons.some(
      (pokemon) => pokemon.id === pokemonId,
    );

    if (!pokemonExists) {
      res.status(404).json({ error: "Pokemon doesn't exist" });
      return;
    }

    const pokemonPosition = this.pokemons.findIndex(
      (pokemon) => pokemon.id === pokemonId,
    );
    const pokemon = this.pokemons[pokemonPosition];

    this.pokemons.splice(pokemonPosition, 1);

    res.status(200).json(pokemon);
  };
}

export default PokemonController;
