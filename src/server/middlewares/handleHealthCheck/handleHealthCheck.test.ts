import { Request, Response } from "express";
import handleHealthCheck from "./handleHealthCheck.js";

describe("Given the handleHealthCheck function", () => {
  describe("When it receives a response", () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    afterEach(() => {
      jest.clearAllMocks();
    });

    test("Then it should call the response's status method with status code 200", () => {
      const expectedStatusCode = 200;

      handleHealthCheck(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with message 'OK'", () => {
      const expectedMessage = { message: "OK" };

      handleHealthCheck(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
