import { Request, Response } from "express";
import Pokemon from "../Pokemon.js";
import { PokemonControllerStructure } from "./types.js";
import { PokemonData } from "../types.js";

class PokemonController implements PokemonControllerStructure {
  constructor(public pokemons: Pokemon[]) {}

  public getAllPokemons = (_req: Request, res: Response): void => {
    res.status(200).json({ pokemons: this.pokemons });
  };

  public createPokemon = (req: Request, res: Response): void => {
    const pokemonData = req.body as PokemonData;

    const pokemonExists = this.pokemons.some(
      (pokemon) => pokemon.name === pokemonData.name,
    );

    if (pokemonExists) {
      res.status(409).json({ error: "Pokemon already exists" });
    }

    const pokemon = new Pokemon(pokemonData);

    this.pokemons.push(pokemon);

    res.status(201).json(pokemon);
  };
}

export default PokemonController;
