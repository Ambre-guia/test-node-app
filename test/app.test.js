const app = require('../index');
const request = require('supertest');

test('GET /ping responds with pong', async () => {
  const response = await request(app).get('/ping');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('pong');
});