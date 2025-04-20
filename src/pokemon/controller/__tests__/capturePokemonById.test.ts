import { Request, Response } from "express";
import PokemonController from "../PokemonController.js";
import { minun, plusle } from "../../fixtures.js";

describe("Given the capturePokemonById method of PokemonController", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as Pick<Response, "status" | "json">;

  const pokemons = [plusle, minun];
  const pokemonController = new PokemonController(pokemons);

  describe("When it receives a request with Plusle's ID as params, and a response", () => {
    const req = {
      params: {
        pokemonId: plusle.id,
      },
      body: {
        isCaptured: true,
      },
    } as Pick<Request, "params" | "body">;

    test("Then it should capture Plusle", () => {
      pokemonController.capturePokemonById(req as Request, res as Response);

      expect(plusle.isCaptured).toBe(true);
    });

    test("Then it should call the response's status method with status code 200", () => {
      const expectedStatusCode = 200;

      pokemonController.capturePokemonById(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with Plusle", () => {
      pokemonController.capturePokemonById(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(plusle);
    });
  });

  describe("When it receives a request with Minun's ID as params while Minun is already captured, and a response", () => {
    const req = {
      params: {
        pokemonId: minun.id,
      },
      body: {
        isCaptured: true,
      },
    } as Pick<Request, "params" | "body">;

    test("Then it should call the response's status method with status code 409", () => {
      const expectedStatusCode = 409;

      pokemonController.capturePokemonById(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with error message 'Pokemon is already captured'", () => {
      const expectedErrorMessage = { error: "Pokemon is already captured" };

      pokemonController.capturePokemonById(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });

  describe("When it receives Pikachu's ID which doesn't exist, and a response", () => {
    const req = {
      params: {
        pokemonId: "pikachuId",
      },
      body: {
        isCaptured: true,
      },
    } as Pick<Request, "params" | "body">;

    test("Then it should call the reponse's staus method with status code 404", () => {
      const expectedStatusCode = 404;

      pokemonController.capturePokemonById(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it shoudl call the response's json method with error message 'Pokemon doesn't exist'", () => {
      const expectedErrorMessage = { error: "Pokemon doesn't exist" };

      pokemonController.capturePokemonById(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
