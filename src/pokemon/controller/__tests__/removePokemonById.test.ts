import { Request, Response } from "express";
import { minun, plusle } from "../../fixtures.js";
import PokemonController from "../PokemonController.js";
import Pokemon from "../../Pokemon.js";

describe("Given the removePokemonById method of PokemonController", () => {
  let pokemons: Pokemon[];
  let pokemonController: PokemonController;

  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  beforeEach(() => {
    pokemons = [plusle];
    pokemonController = new PokemonController(pokemons);

    jest.clearAllMocks();
  });

  describe("When it receives a request with Plusle's ID as params, and a response", () => {
    const req = {
      params: { pokemonId: plusle.id },
    } as Pick<Request, "params">;

    test("Then it should call the response's status method with status code 200", () => {
      const expectedStatusCode = 200;

      pokemonController.removePokemonById(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with Plusle", () => {
      pokemonController.removePokemonById(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(plusle);
    });

    test("Then Plusle should not exist anymore", () => {
      pokemonController.removePokemonById(req as Request, res as Response);

      expect(pokemons).not.toContain(plusle);
    });
  });

  describe("When it receives a request with Minun's ID as params which doesn't exist, and a response", () => {
    const req = {
      params: { pokemonId: minun.id },
    } as Pick<Request, "params">;

    test("Then it should call the response's status method with status code 404", () => {
      const expectedStatusCode = 404;

      pokemonController.removePokemonById(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with error message 'Pokemon doesn't exist'", () => {
      const expectedErrorMessage = { error: "Pokemon doesn't exist" };

      pokemonController.removePokemonById(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
