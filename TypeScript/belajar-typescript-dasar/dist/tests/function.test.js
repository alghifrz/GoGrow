"use strict";
describe('Function', function () {
    it('should support in typescript', function () {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello('Alghif')).toBe('Hello Alghif');
        function printHello(name) {
            console.info(`Hello ${name}`);
        }
        printHello('Alghif');
    });
    it('should support default value', function () {
        function sayHello(name = "Guest") {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe('Hello Guest');
        expect(sayHello('Alghif')).toBe('Hello Alghif');
    });
    it('should support rest parameter', function () {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it('should support optional parameter', function () {
        function sayHello(name, greeting) {
            if (greeting) {
                return `${greeting} ${name}`;
            }
            else {
                return name;
            }
        }
        expect(sayHello('Alghif')).toBe('Alghif');
        expect(sayHello('Alghif', 'Hi')).toBe('Hi Alghif');
    });
    it('should support function overloading', function () {
        function callme(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
        }
        expect(callme("Alghif")).toBe("ALGHIF");
        expect(callme(0)).toBe(2);
    });
    it('should support function as parameter', function () {
        function sayHello(name, greeting) {
            return `Hello ${name}, ${greeting(name)}`;
        }
        function selfIntroduce(name) {
            return `My name is ${name}`;
        }
        expect(sayHello('Alghif', selfIntroduce)).toBe('Hello Alghif, My name is Alghif');
        expect(sayHello('Alghif', (name) => `My name is ${name}`)).toBe('Hello Alghif, My name is Alghif');
        expect(sayHello('Alghif', function (name) {
            return `My name is ${name}`;
        })).toBe('Hello Alghif, My name is Alghif');
    });
});
