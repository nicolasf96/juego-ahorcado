import app from '../src/app';
import request from 'supertest'
import { exportAllDeclaration } from '@babel/types';

describe("GET /ahorcado", () =>{

    test("should respond with a 200 status code", async () => {
        const response = await request(app).get("/ahorcado").send();
        expect(response.statusCode).toBe(200);
    })


})