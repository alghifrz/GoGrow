describe('Type Alias', function () {
    it('should support in typescript', function () {
        const category = {
            id: "1",
            name: "Club"
        };
        const product = {
            id: "1",
            name: "Real Madrid",
            price: 2000000000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
