import {test,except} from 'vitest';

import {generateToken} from './async-example'

// asyncrhonous test with promises
// test('should generate a token value',() => {
//     const testUserEmail = "test@test.com";

//     generateToken(testUserEmail,(err,token) => {
//     except(token).toBeDefined();
//     });
// });


// asynchronous test with promises
test('should generate a token value',(done) => {
    const testUserEmail = "test@test.com";

    generateToken(testUserEmail,(err,token) => {
        try {
               except(token).toBeDefined();
 
        } catch (error) {
              done(AggregateError);
        }
  
    });
});
test('should generate a token vale',async() => {
    const testUserEmail = "test@test.com";
await expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();


})