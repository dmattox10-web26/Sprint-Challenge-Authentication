const request = require('supertest')

const server = require('../api/server')

describe('server', () => {
    describe('index route', () => {
        it('should return an OK status code from the index route', async () => {
            const expectedStatusCode = 200

            const response = await request(server).get('/')

            expect(response.status).toEqual(expectedStatusCode)
        })
        it('should return a JSON object from the index route', async () => {
            const expectedBody = { api: 'up' }

            const response = await request(server).get('/')

            expect(response.body).toEqual(expectedBody)
        })
    })

    describe('auth route register POST', () => {
        it('should POST register with status code 201 AND return a JSON object', async () => {
            const expectedStatusCode = 201

            const response = await request(server)
                .post('/api/auth/register')
                .send({
                    username: 'username',
                    password: 'password'
                })

            expect(response.status).toEqual(expectedStatusCode)

            expect(response.type).toEqual('application/json')
        })
    })

    describe('auth route login POST', () => {
        it('should POST login with status code 200 AND return a json object', async () => {
            const expectedStatusCode = 200

            const response = await request(server)
                .post('/api/auth/login')
                .send({
                    username: 'user',
                    password: 'pass'
                })

            expect(response.status).toEqual(expectedStatusCode)

            expect(response.type).toEqual('application/json')
        })
    })
    
})