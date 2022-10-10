const validateValue = require('./validateValue')
/**
 * 1 аргумент - название теста
 * 2 - колбэк с проверками
 */
// test('Валидация значения', () => {
//     expect(validateValue(50)).toBe(true)
// })


/**
 * Тестовый набор
 * describe - описание
 */
describe('validateValue', () => {
    test('Корректное значение', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('Пограничное минимальное значение', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('Пограничное максимальное значение', () => {
        expect(validateValue(100)).toBe(true)
    })
    test('Меньше корректного', () => {
        expect(validateValue(-1)).toBe(false)
    })
    test('Больше корректного', () => {
        expect(validateValue(101)).toBe(false)
    })
})