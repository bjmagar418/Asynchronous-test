import {test,except} from 'vitest';

import {generateToken} from './async-example'
test('should generate a token value',() => {
    const testUserEmail = "test@test.com";

    generateToken(testUserEmail,(err,token) => {
    except(token).toBeDefined();
    });
});
