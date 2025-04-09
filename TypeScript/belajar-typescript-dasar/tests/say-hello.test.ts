import { sayHello } from "../src/say-hello";

describe('sayHello', function(){
    it('should return hello alghif', function() {
        expect(sayHello('Alghif')).toBe('Hello Alghif')
    });
});