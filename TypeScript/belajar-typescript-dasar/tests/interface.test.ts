import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe('Interface', function() {
  it('should support in typescript', function() {
    
    const seller: Seller = {
        id: 1,
        name: "Toko ABC",
        nib: "12345",
        npwp: "6789"
    };

    seller.name = "Toko Arz";

    console.info(seller);
  });

  it('should support function interface', function() {

    interface AddFunction {
        (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
        return value1 + value2;
    }

    expect(add(2,2)).toBe(4);
  });

  it('should support indexable interface', function() {

    interface StringArray {
        [index: number]: string
    }

    const names : StringArray = ["Alghif", "Rasyid", "Zola"];
    console.info(names);

  });

  it('should support indexable interface for non number index', function() {

    interface StringDictionary {
        [key: string]: string
    }

    const dictionary :  StringDictionary = {
        "name" : "Alghif",
        "address" : "Indonesia"
    }
    
    expect(dictionary["name"]).toBe("Alghif");
    expect(dictionary["address"]).toBe("Indonesia");

  });

  it('should support extends interface', function() {

    const employee :  Employee = {
        id : "1",
        name : "Alghif",
        division : "IT"
    }

    const manager : Manager = {
        id : "1",
        name : "Alghif",
        division : "IT",
        numberOfEmployee : 2,
    }
    
    console.info(employee);
    console.info(manager);

  });

  it('should support function in interface', function() {

    const person : Person = {
        name: "Alghif",
        sayHello: function (name: string): string {
            return `Hello ${name}, my name is ${this.name}`;
        }
    };

    console.info(person.sayHello("Rasyid"));

  });

  it('should support intersection types', function() {
    
    interface HasName {
      name: string
    }

    interface HasId {
      id: string
    }

    type Domain = HasId & HasName;

    const domain : Domain = {
        id: "1",
        name: "Alghif"
    }

    console.info(domain);
  
  });

  it('should support type assertions', function() {
  
    const person : any = {
        name: "Alghif",
        age: 20
    };

    const person2 : Person = person as Person;

    console.info(person2);
  
  });

});