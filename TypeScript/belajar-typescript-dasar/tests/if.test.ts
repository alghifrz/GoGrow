describe('If Statement', function() {

    it('should support in typescript', function() {
    
        const examValue = 70;
        if (examValue > 75) {
            console.info("Selamat, Anda Lulus");
        }else {
            console.info("Maaf, Anda Tidak Lulus");
        }

    });

    it('should support ternary operator', function() {
    
        const examValue = 70;
        const result = examValue > 75 ? "Selamat, Anda Lulus" : "Maaf, Anda Tidak Lulus";
        console.info(result);

    });

    it('should support switch case', function() {
    
        function sayHello(name: string) {
            switch (name) {
                case "Alghif":
                    return "Hello Alghif";
                case "Rasyid":
                    return "Hello Rasyid";
                default:
                    return "Hello Guest";
            }
        }

        console.info(sayHello("Alghif"));
        console.info(sayHello("Rasyid"));
        console.info(sayHello("Zola"));
    });

});