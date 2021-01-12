process.env.NODE_ENV = "test";

const app = require("../app");
const request = require("supertest");
const connection = require("../db/connection");

beforeEach(() => {
  return connection.seed.run();
});

afterAll(() => {
  return connection.destroy();
});
describe("/api", () => {
  describe("/user", () => {
    describe("GET", () => {
      it("return array of users data", async () => {
        const {
          body: { user },
        } = await request(app).get("/api/user").expect(200);
        expect(user.length).toBe(2);
   
        expect(user[0].u_name).toBe('ali')
      });
    });
  });
});
