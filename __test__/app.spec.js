process.env.NODE_ENV = "test";
const app = require("../app");
const request = require("supertest");
const connection = require("../db/connection");
const user = require("../db/data/testData/user");

beforeEach(() => {
  return connection.seed.run();
});

afterAll(() => {
  return connection.destroy();
});
// describe("wrong route", () => {
//   it.only("return Route Not Found if passing wrong route", async () => {
//     const result = await (await request(app).get("/aoi")).expect(404);
//     console.log(result.text);
//   });
// });
describe("/api", () => {
  describe("/user", () => {
    describe("GET", () => {
      it("return array of users data", async () => {
        const {
          body: { user },
        } = await request(app).get("/api/user").expect(200);
        expect(user.length).toBe(2);

        expect(user[0].u_name).toBe("ali");
      });
      describe("POST", () => {
        it("return array of inserted data into user table", async () => {
          const data = {
            u_name: "ahsan",
            u_email: "ahsan@gmail.com",
            u_password: "12",
          };
          const { body: user } = await request(app)
            .post("/api/user")
            .send(data)
            .expect(201);
          console.log(user.user.u_name);
          expect(user.user.u_name).toBe("ahsan");
        });
      });
      it.only("Status 400 when propert is missing", async () => {
        const data = {
          u_name: "ahsan",
          u_email: "",
          u_password: "12",
        };
        const { body } = await request(app)
          .post("/api/user")
          .send(data)
          .expect(404);
        expect(body.msg).toBe("email could not be empty");
      });
       it("Status 400 when propert is missing", async () => {
        const data = {
          u_name: "ahsan",
          u_email: "ahsan@gmail.com",
          u_password: "",
        };
        const { body } = await request(app)
          .post("/api/user")
          .send(data)
          .expect(404);
        expect(body.msg).toBe("password could not be empty");
      });
    });
  });
});
