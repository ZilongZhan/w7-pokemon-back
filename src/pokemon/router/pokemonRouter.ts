import { Router } from "express";
import PokemonController from "../controller/PokemonController.js";
import pokemons from "../data/pokemons.js";

const pokemonRouter = Router();

const pokemonController = new PokemonController(pokemons);

pokemonRouter.get("/", pokemonController.getAllPokemons);

pokemonRouter.post("/", pokemonController.addPokemon);

pokemonRouter.delete("/:pokemonId", pokemonController.removePokemonById);

pokemonRouter.patch(
  "/add-to-poke-ball/:pokemonId",
  pokemonController.capturePokemonById,
);

pokemonRouter.patch(
  "/remove-from-poke-ball/:pokemonId",
  pokemonController.releasePokemonById,
);

export default pokemonRouter;
