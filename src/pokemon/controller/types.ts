import { Request, Response } from "express";

export interface PokemonControllerStructure {
  getAllPokemons: (_req: Request, res: Response) => void;
  addPokemon: (req: Request, res: Response) => void;
  removePokemonById: (req: Request, res: Response) => void;
  capturePokemonById: (req: Request, res: Response) => void;
  releasePokemonById: (req: Request, res: Response) => void;
}
