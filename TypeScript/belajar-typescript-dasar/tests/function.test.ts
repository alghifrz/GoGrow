describe('Function', function() {

    it('should support in typescript', function() {
    
        function sayHello(name : string) : string {
            return `Hello ${name}`;
        }

        expect(sayHello('Alghif')).toBe('Hello Alghif');

        function printHello(name : string) : void {
            console.info(`Hello ${name}`);
        }

        printHello('Alghif');

    });

    it('should support default value', function() {
    
        function sayHello(name : string = "Guest") : string {
            return `Hello ${name}`;
        }

        expect(sayHello()).toBe('Hello Guest');
        expect(sayHello('Alghif')).toBe('Hello Alghif');
    
    });

    it('should support rest parameter', function() {
    
        function sum(...values : number[]) : number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);

    });

    it('should support optional parameter', function() {
    
        function sayHello(name : string, greeting? : string) : string {
            if (greeting) {
                return `${greeting} ${name}`;
            }else{
                return name;
            }
        }

        expect(sayHello('Alghif')).toBe('Alghif');
        expect(sayHello('Alghif', 'Hi')).toBe('Hi Alghif');
    
    });

    it('should support function overloading', function() {
    
        function callme(value : string) : string;
        function callme(value : number) : number;
        function callme(value : any) : any {
            if (typeof value === "string") {
                return value.toUpperCase();
            }else if (typeof value === "number") {
                return value + 2;
            }
        }

        expect(callme("Alghif")).toBe("ALGHIF");
        expect(callme(0)).toBe(2);
    });

    it('should support function as parameter', function() {
    
        function sayHello(name : string, greeting : (name : string) => string) : string {
            return `Hello ${name}, ${greeting(name)}`;
        }

        function selfIntroduce(name : string) {
            return `My name is ${name}`;
        }

        expect(sayHello('Alghif', selfIntroduce)).toBe('Hello Alghif, My name is Alghif');

        expect(sayHello('Alghif', (name : string ) => `My name is ${name}`)).toBe('Hello Alghif, My name is Alghif');
    
        expect(sayHello('Alghif', function (name: string) {
            return `My name is ${name}`;
        })).toBe('Hello Alghif, My name is Alghif');

    });

});