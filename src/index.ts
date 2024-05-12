/**
 * Suma dos números.
 *
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} - La suma de a y b.
 */
const add = (a: number, b: number): number => a + b;

/**
 * Resta dos números.
 *
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} - La resta de a y b.
 */
const subtract = (a: number, b: number): number => a - b;

/**
 * Multiplica dos números.
 *
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} - El producto de a y b.
 */
const multiply = (a: number, b: number): number => a * b;

export default {
  add,
  subtract,
  multiply
};