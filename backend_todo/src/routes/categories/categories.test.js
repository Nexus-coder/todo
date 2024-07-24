//Get request via supertest
const request = require("supertest");
const app = require("../../app");
const { mongoConnect, mongoDisconnect } = require("../../services/mongo");
//In order to connect to mongodb first before making the tests run we shall call the function to connect in a test environment
//This means we shall call a global describe where we first call mongodb
describe("LAUNCH API", () => {
  //Setup the environment
  beforeAll(async () => {
    await mongoConnect();
  });
  //After the tests are done disconnect from the server
  afterAll(async () => {
    await mongoDisconnect();
  });
  describe("Test GET /categories", () => {
    test("It should respond with code 200 success", async () => {
      //Calls the app object adds a listen function and then allows you to make requests directly against the resulting http server
      //Just the browser's fetch function
      const response = await request(app)
        .get("/categories")
        .expect("Content-type", /json/)
        .expect(200);

      // expect(response.statusCode).toBe(200);
    });
  });
  describe("Test POST /categories", () => {
    test("It should respond with 200 response", () => {
      const respond = request(app)
        .post("/categories")
        .send({})
        .expect(201)
        .expect("Content-type", /json/);
      //Whenever we check our body we use the jest expect
      //Check only the properties you want to match
      expect(response.body).toMatchObject({});
    });
    test("It should catch missing required properties", () => {});
  });
  describe("Test PUT /categories");
  describe("Test DELETE /categories");
});
