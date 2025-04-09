import { Category, Product } from "../src/type-alias";


describe('Type Alias', function() {
  it('should support in typescript', function() {
    
    const category: Category = {
        id: "1",
        name: "Club"
    };

    const product: Product = {
        id: "1",
        name: "Real Madrid",
        price: 2000000000,
        category: category
    };

    console.info(category);
    console.info(product);

  });
});