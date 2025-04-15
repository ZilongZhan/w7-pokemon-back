import { Request, Response } from "express";
import handleEndpointNotFound from "./handleEndpointNotFound.js";

describe("Given the handleEndpointNotFound function", () => {
  describe("When it receives a response", () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    afterEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the response's status method with status code 404", () => {
      const expectedStatusCode = 404;

      handleEndpointNotFound(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with error message 'Endpoint not found'", () => {
      const expectedErrorMessage = { error: "Endpoint not found" };

      handleEndpointNotFound(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
