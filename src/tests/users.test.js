// You already have the methods imported
import { default as expect } from "expect";
import { getUser, getUsers } from "../users";

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want
describe("getUser", () => {
    it("Should return the correct ID", async () => {
      const user = await getUser(3);
      expect(user.id).toBe(3); // revisar el numero 3
    });
  
    it("Should return an message for a invalid ID. ", async () => {
      await expect(getUser(5)).rejects.toThrow("User not found");
    }); // verificar con un dato que no existe
  });

// READ documentation

 