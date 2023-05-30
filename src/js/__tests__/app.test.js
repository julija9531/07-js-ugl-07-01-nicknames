import Validator from '../app/app.js';

test('Корректное username', () => {
  const user = new Validator('U-s_e4r');
  expect(user.validateUsername()).toBe(true);
});

test('username содержит символы помимо латинских букв, тире -, подчёркивания _ и цифр (0-9)', () => {
  const user = new Validator('User!!!');
  expect(user.validateUsername()).toBe(false);
});

test('username содержит подряд более трёх цифр', () => {
  const user = new Validator('U-s_e420r');
  expect(user.validateUsername()).toBe(false);
});

test('username начинаться цифрами', () => {
  const user = new Validator('0U-s_e4r');
  expect(user.validateUsername()).toBe(false);
});

test('username начинаться символом подчёркивания', () => {
  const user = new Validator('_U-s_e4r');
  expect(user.validateUsername()).toBe(false);
});

test('username начинаться с тире', () => {
  const user = new Validator('-U-s_e4r');
  expect(user.validateUsername()).toBe(false);
});

test('username заканчивается цифрами', () => {
  const user = new Validator('U-s_e4r9');
  expect(user.validateUsername()).toBe(false);
});

test('username заканчивается символом подчёркивания', () => {
  const user = new Validator('U-s_e4r_');
  expect(user.validateUsername()).toBe(false);
});

test('username заканчивается с тире', () => {
  const user = new Validator('U-s_e4r-');
  expect(user.validateUsername()).toBe(false);
});
