describe('Pruebas de </DemoComponent>', () => {  

    test("Esta prueba no debe de fallar", () => {
        const message1 = "Hola mundo";

        const message2 = message1.trim();

        expect(message2).toBe("Hola mundo");
    });
})