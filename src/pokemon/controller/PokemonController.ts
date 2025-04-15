import { Request, Response } from "express";
import Pokemon from "../Pokemon.js";
import { PokemonControllerStructure } from "./types.js";

class PokemonController implements PokemonControllerStructure {
  constructor(public pokemons: Pokemon[]) {}

  public async getAllPokemons(_req: Request, res: Response): Promise<void> {
    try {
      res.status(200).json({ pokemons: this.pokemons });
    } catch {
      throw new Error("Error retrieving pokemons");
    }
  }
}

export default PokemonController;
