describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: 1,
            name: "Toko ABC",
            nib: "12345",
            npwp: "6789"
        };
        seller.name = "Toko Arz";
        console.info(seller);
    });
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('should support indexable interface', function () {
        const names = ["Alghif", "Rasyid", "Zola"];
        console.info(names);
    });
    it('should support indexable interface for non number index', function () {
        const dictionary = {
            "name": "Alghif",
            "address": "Indonesia"
        };
        expect(dictionary["name"]).toBe("Alghif");
        expect(dictionary["address"]).toBe("Indonesia");
    });
    it('should support extends interface', function () {
        const employee = {
            id: "1",
            name: "Alghif",
            division: "IT"
        };
        const manager = {
            id: "1",
            name: "Alghif",
            division: "IT",
            numberOfEmployee: 2,
        };
        console.info(employee);
        console.info(manager);
    });
    it('should support function in interface', function () {
        const person = {
            name: "Alghif",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Rasyid"));
    });
    it('should support intersection types', function () {
        const domain = {
            id: "1",
            name: "Alghif"
        };
        console.info(domain);
    });
    it('should support type assertions', function () {
        const person = {
            name: "Alghif",
            age: 20
        };
        const person2 = person;
        console.info(person2);
    });
});
export {};
