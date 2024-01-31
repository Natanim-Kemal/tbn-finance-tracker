const supertest = require("supertest");
const app = require("../../app"); // Your express app

// describe(
//     "POST create-account",
//     () => {
//         it("creates a new account and responds with json", async () => {
//             const newAccount = {
//                 firstName: "John",
//                 lastName: "Doe",
//                 email: "john.doe@example.com",
//                 password: "securepassword",
//                 username: "johndoe",
//                 financialAccounts: ["account1", "account2"],
//             };

//             const { status, message } = await supertest(app)
//                 .post("/api/create-account")
//                 .send(newAccount)
//                 .set("Action", "application/json");

//             console.log(status, message);

//             console.log("hhhhhhhhhhhhhhhhhhhhhhhh");
//         }, 100000);
//     },
//     it("returns with error when details are not given", () => {
//         expect(true).toBe(true);
//     })
// );

describe("GET account details", () => {
    it("return with account details", async () => {
        const userId = "65ba3f8eb2db86fcbfa32fe0";

        const response = supertest(app).get(
            `/api/get-account-details/:${userId}`
        );

        console.log(response);
    });
});
