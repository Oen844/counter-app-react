import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUsusarioActivo debe de retornar un objeto", () => {
    const name = "Pau Egea";
    const testUser = {
      uid: "ABC567",
      username: name,
    };

    const user = getUsuarioActivo(name);

    expect(testUser).toEqual(user);
  });
});
