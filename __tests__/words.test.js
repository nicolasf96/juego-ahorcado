const request = require('supertest')

const { app } = require('../server')

// aqui colocaremos las pruebas...


describe('POST /theword', () => {
    test('should return 200 status code if its the winner word', async () => {
        const response = await request(app)
        .post('/theword')
        .send({
            theword: 'theword'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)

        expect(response.body).toEqual({
            theword: 'theword'
          })
    })
  })
  