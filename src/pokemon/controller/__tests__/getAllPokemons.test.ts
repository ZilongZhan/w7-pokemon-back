import { Request, Response } from "express";
import PokemonController from "../PokemonController.js";
import { minun, plusle } from "../../fixtures.js";

describe("Given the getAllPokemon method of PokemonController", () => {
  const pokemons = [plusle, minun];
  const pokemonController = new PokemonController(pokemons);

  const req = {};

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("When it receives a response", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    test("Then it should call the response's status method with status code 200", () => {
      const expectedStatusCode = 200;

      pokemonController.getAllPokemons(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with plusle and minun", () => {
      const expectedPokemons = {
        pokemons,
      };

      pokemonController.getAllPokemons(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedPokemons);
    });
  });
});
