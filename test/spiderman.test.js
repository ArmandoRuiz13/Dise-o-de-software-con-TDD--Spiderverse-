const Spiderman = require('./../app/spiderman')

describe('Prueba Unitaria para agregar datos para un spiderman a la clase spiderman', () =>{
    test('Prueba 1 Spiderman objeto', () => {
        // Codogigo que vamos a utlizar tal cual
        const AndrewGarfield = new Spiderman('Spiderman Sony',31,'Angrew GArgield',2,'Sony')
        // Validamos el codigo que esperamos
        expect(AndrewGarfield.name).toBe('Spiderman Sony')
        expect(AndrewGarfield.name).toBe(31)
        expect(AndrewGarfield.name).toBe('Andrew Garfield')
        expect(AndrewGarfield.name).toBe(31)
        expect(AndrewGarfield.name).toBe('Sony')
    })
})