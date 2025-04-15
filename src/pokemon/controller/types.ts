import { Request, Response } from "express";

export interface PokemonControllerStructure {
  getAllPokemons: (_req: Request, res: Response) => Promise<void>;
}
