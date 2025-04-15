import { Request, Response } from "express";
import Pokemon from "../Pokemon.js";
import { PokemonControllerStructure } from "./types.js";

class PokemonController implements PokemonControllerStructure {
  constructor(public pokemons: Pokemon[]) {}

  public getAllPokemons = (_req: Request, res: Response): void => {
    res.status(200).json({ pokemons: this.pokemons });
  };
}

export default PokemonController;
