const Spiderman = require('./../app/spiderman')

describe('Prueba Unitaria para agregar datos para un spiderman a la clase spiderman', () =>{
    test('Prueba 1 Spiderman objeto', () => {
        // Codogigo que vamos a utlizar tal cual
        const AndrewGarfield = new Spiderman('Spiderman Sony',31,'Andrew Garfield',2,'Sony')
        // Validamos el codigo que esperamos
        expect(AndrewGarfield.name).toBe('Spiderman Sony')
        expect(AndrewGarfield.age).toBe(31)
        expect(AndrewGarfield.actor).toBe('Andrew Garfield')
        expect(AndrewGarfield.movies).toBe(2)
        expect(AndrewGarfield.studio).toBe('Sony')
    })
})