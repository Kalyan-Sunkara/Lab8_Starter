// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

//phone number
test('checks if 1888888888 is a phone number', () => {
    expect(functions.isPhoneNumber('1888888888')).toBe(false);
});
test('checks if 1-888-888-8888 is a phone number', () => {
    expect(functions.isPhoneNumber('1-888-888-8888')).toBe(true);
});
test('checks if 1-8-8-8 is a phone number', () => {
    expect(functions.isPhoneNumber('1-8-8-8')).toBe(false);
});
test('checks if 000-000-0000 is a phone number', () => {
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
});

//email
test('checks if kalyangmail.com is an email', () => {
    expect(functions.isEmail('kalyangmail.com')).toBe(false);
});
test('checks if kalyan@gmail.com is an email', () => {
    expect(functions.isEmail('kalyan@gmail.com')).toBe(true);
});
test('checks if @hello.com is an email', () => {
    expect(functions.isEmail('@hello.com')).toBe(false);
});
test('checks if lallala@lalalal.com is an email', () => {
    expect(functions.isEmail('lallala@lalalalal.com')).toBe(true);
});

//isStrongPassword
test('checks if h is a strong password', () => {
    expect(functions.isStrongPassword('h')).toBe(false);
});
test('checks if aaaaaaaaaaa is a strong password', () => {
    expect(functions.isStrongPassword('aaaaaaaaaaa')).toBe(true);
});
test('checks if kalyan! is a strong password', () => {
    expect(functions.isStrongPassword('kalyan!')).toBe(false);
});
test('checks if a123456789 is a strong password', () => {
    expect(functions.isStrongPassword('a123456789')).toBe(true);
});

//isDate
test('checks if 1/1/1 is a date', () => {
    expect(functions.isDate('1/1/1')).toBe(false);
});
test('checks if 1/1/2023 is a date', () => {
    expect(functions.isDate('1/1/2023')).toBe(true);
});
test('checks if 0/0/000 is a date', () => {
    expect(functions.isDate('0/0/000')).toBe(false);
});
test('checks if 2/29/2023', () => {
    expect(functions.isDate('2/29/2023')).toBe(true);
});

//isHexColor
test('checks if FFFF is a hex color', () => {
    expect(functions.isHexColor('FFFF')).toBe(false);
});
test('checks if FFF is a hex color', () => {
    expect(functions.isHexColor('FFF')).toBe(true);
});
test('checks if 00-000 is a hex color', () => {
    expect(functions.isHexColor('00-000')).toBe(false);
});
test('checks if 123456 is a hex color', () => {
    expect(functions.isHexColor('123456')).toBe(true);
});

// TODO - Part 2