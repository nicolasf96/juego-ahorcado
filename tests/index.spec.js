import app from '../src/app';
import request from 'supertest'
import { describe } from 'yargs';

describe("GET /tasks", () =>{

    test("should respond with a 200 status code", async () => {
        const response = await (await request(app).get("/tasks")).send();
        
    })


})