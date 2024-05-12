"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Suma dos números.
 *
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} - La suma de a y b.
 */
var add = function (a, b) { return a + b; };
/**
 * Resta dos números.
 *
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} - La resta de a y b.
 */
var subtract = function (a, b) { return a - b; };
/**
 * Multiplica dos números.
 *
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} - El producto de a y b.
 */
var multiply = function (a, b) { return a * b; };
const _default = {
  add: add,
  subtract: subtract,
  multiply: multiply
};
export { _default as default };
