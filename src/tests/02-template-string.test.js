import { getSaludo } from "../base-pruebas/02-template-string";



describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe de retornar "Hola Fernando"', () => {

        const name = 'Fernando';
        const saludo = getSaludo(name);

        expect(saludo).toBe(`Hola ${name}`);
    });
});