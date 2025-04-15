import { Router } from "express";
import PokemonController from "../controller/PokemonController.js";
import pokemons from "../data/pokemons.js";

const pokemonRouter = Router();

const pokemonController = new PokemonController(pokemons);

pokemonRouter.get("/", pokemonController.getAllPokemons);

export default pokemonRouter;
