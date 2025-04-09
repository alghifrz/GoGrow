describe('Loop', function() {

    it('should support for loop', function() {
    
        const names = ["Alghif", "Rasyid", "Zola"];

        // for i
        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }

        // for of
        for (const name of names) {
            console.info(name);
        }

        // for in
        for (const index in names) {
            console.info(names[index]);
        }

    });

    it('should support while loop', function() {
    
        let index = 0;

        while (index < 10) {
            console.info(index);
            index++;
        }
        
    });

    it('should support do while loop', function() {
    
        let index = 0;

        do {
            console.info(index);
            index++;
        } while (index < 10);
        
    });

    it('should support break and continue', function() {
    
        let counter : number = 0;

        do {
            counter++;
            if (counter == 10) {
                break;	
            }
            if (counter % 2 == 0) {
                continue;
            }
            console.info(counter);
        } while (true);
    
    });

});