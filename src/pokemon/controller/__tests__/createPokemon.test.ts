import { Request, Response } from "express";
import { minun, plusle } from "../../fixtures.js";
import PokemonController from "../PokemonController.js";
import Pokemon from "../../Pokemon.js";

describe("Given the createPokemon method of PokemonController", () => {
  let pokemons: Pokemon[];
  let pokemonController: PokemonController;

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  beforeEach(() => {
    pokemons = [minun];
    pokemonController = new PokemonController(pokemons);

    jest.clearAllMocks();
  });

  describe("When it receives a request with Plusle", () => {
    const req = {
      body: plusle,
    } as Pick<Request, "body">;

    test("Then it should call the response's status method with status code 201", () => {
      const expectedStatusCode = 201;

      pokemonController.createPokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with a pokemon called 'Plusle'", () => {
      const expectedName = { name: plusle.name };

      pokemonController.createPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining(expectedName),
      );
    });

    test("Then it should call the response's json method with a pokemon with index 311", () => {
      const expectedPokeIndex = { pokeIndex: 311 };

      pokemonController.createPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining(expectedPokeIndex),
      );
    });

    test("Then it should call the response's json method with a pokemon that is not captured", () => {
      pokemonController.createPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ isCaptured: false }),
      );
    });
  });

  describe("When it receives a response with Minun which already exists", () => {
    const req = { body: minun } as Pick<Request, "body">;

    test("Then it should call the response's status method with status code 409", () => {
      const expectedStatusCode = 409;

      pokemonController.createPokemon(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with error message 'Pokemon already exists'", () => {
      const expectedErrorMessage = {
        error: "Pokemon already exists",
      };

      pokemonController.createPokemon(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
