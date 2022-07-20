import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp.js";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un heroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeByOd debe de retornar un Undefined si no existe", () => {
    const id = 55;
    const heroe = getHeroeById(id);

    expect(heroe).toBeFalsy();
  });

  test("getHeroesByOwner debe de retornar un arreglo de DC con .length = 3", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);

    expect(heroe.length).toEqual(3);
  });

  test("getHeroesByOwner debe de retornar un arreglo de Marvel con .length = 2", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);

    expect(heroe.length).toEqual(2);
  });
});
