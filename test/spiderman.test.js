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
describe('Prueba Unitaria para agregar un metodo get a la clase spiderman', () =>{
    test('Prueba 2 Spiderman usando metodo getInfo()', () => {
        // Codogigo que vamos a utlizar tal cual
        const tomHolland = new Spiderman('Spiderman Marvel',25,'Tom Holland',5,'Marvel')
        // Validamos el codigo que esperamos
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    })
})