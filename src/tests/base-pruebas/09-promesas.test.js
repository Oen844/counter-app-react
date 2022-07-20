import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from '../../data/heroes';

describe("Pruebas en 09-promesas", () => {
  test("getHeroeById debe de retornar un heroe por ID", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();
    });
  });

  test("getHeroeById debe de retornar un error si el heroe no existe", (done) => {
    const id = heroes.length +1;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();

        done();
      })
      .catch((error) => {
        console.log(error);

        expect(error).toBe("No se pudo encontrar el héroe con el id: " + id);

        done();
      });
  });
});
