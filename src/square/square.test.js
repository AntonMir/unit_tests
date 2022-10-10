const square = require('./square')

describe('square', () => {

    let mockValue;

    beforeEach(() => {
        mockValue = Math.random() // для каждого етста случаное значение
    })

    beforeAll(() => {
        // Добавили пользователя в базу
    })

    test('Корректное значение', () => {
        expect(square(2)).toBe(4) // должно быть равно
        expect(square(2)).toBeLessThan(5) // должно быть меньше чем
        expect(square(2)).toBeGreaterThan(3) // должно быть больше чем
        expect(square(2)).not.toBeUndefined() // не должно быть undefined

        const spyMathPowColled = jest.spyOn(Math, 'pow') // МОКА
        square(2)
        expect(spyMathPowColled).toBeCalledTimes(1)
    })

    afterEach(() => {
        jest.clearAllMocks() // только если мока повторяется в разных тестах
    })

    afterAll(() => {
        // Удалили пользователя с базы
    })
})