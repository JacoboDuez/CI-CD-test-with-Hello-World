

const getMessage = require('./index.js');

test('returns the message from the server',()=>{
    expect(getMessage()).toBe("Hello World from Express");
});

