// app.test.js
const request = require('supertest');
const app = require('./app'); // Import your express app without starting the server

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World');
  });
});
