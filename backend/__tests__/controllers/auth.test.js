const authController = require("../../controllers/authController");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

jest.mock("jsonwebtoken", () => ({
    sign: jest.fn(),
}));

jest.mock("../../models/user", () => ({
    findOne: jest.fn(),
}));

jest.mock("../../models/user", () => ({
    login: jest.fn(),
}));

const validSignupData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "password123",
    username: "johndoe",
    financialAccounts: ["accout1", "account2"],
};

const existingUserSignupData = {
    firstName: "Abebe",
    lastName: "James",
    email: "existing.user@example.com",
    password: "password456",
    username: "jamesAbebe",
    financialAccounts: ["account3", "account4"],
};

describe("AuthController", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("signup", () => {
        it("should create a new user and return success", async () => {
            // Mock User.findOne to simulate a user not existing
            User.findOne = jest.fn().mockResolvedValue(null);

            // Mock User.create to simulate successful user creation
            User.create = jest.fn().mockResolvedValue({ _id: "1234" });

            // Mock createToken to simulate token creation
            jwt.sign.mockReturnValue("mockedToken");

            // Mock the request and response objects
            const req = {
                body: {
                    firstName: "John",
                    lastName: "Doe",
                    email: "john.doe@example.com",
                    password: "password123",
                    username: "johndoe",
                    financialAccounts: ["accout1", "account2"],
                },
            };
            const res = {
                cookie: jest.fn(),
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            // Call the controller method
            await authController.signup(req, res);

            // Expectations
            expect(User.findOne).toHaveBeenCalledWith({
                email: req.body.email,
            });
            expect(User.create).toHaveBeenCalledWith({
                ...validSignupData,
            });
            expect(jwt.sign).toHaveBeenCalledWith(
                { id: "1234" },
                process.env.JWT_KEY,
                { expiresIn: expect.any(Number) }
            );
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({
                message: "Operation successful!",
            });
        });

        it("should return failure if user already exists", async () => {
            // Mock User.findOne to simulate an existing user
            User.findOne = jest.fn().mockResolvedValue({
                _id: "1234",
                email: existingUserSignupData.email,
            });

            // Mock the request and response objects
            const req = {
                body: {
                    existingUserSignupData,
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            // Call the controller method
            await authController.signup(req, res);

            // Expectations
            expect(User.findOne).toHaveBeenCalledWith({
                email: req.body.email,
            });
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({
                success: false,
                message: "Invalid Credentials",
            });
        });
    });

    describe("login", () => {
        it("should return user and token when login is successful", async () => {
            const mockUser = { _id: "1234" };
            User.login.mockResolvedValue(mockUser);

            jwt.sign.mockReturnValue("mockedToken");

            // Mock the request and response objects
            const req = {
                body: {
                    email: "john.doe@example.com",
                    password: "password123",
                },
            };
            const res = {
                cookie: jest.fn(),
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            // Call the controller method
            await authController.login(req, res);

            // Expectations
            expect(User.login).toHaveBeenCalledWith(
                req.body.email,
                req.body.password
            );
            expect(jwt.sign).toHaveBeenCalledWith(
                { id: mockUser._id },
                process.env.JWT_KEY,
                { expiresIn: 86400 }
            );
            expect(res.cookie).toHaveBeenCalledWith("jwt", "mockedToken", {
                domain: "localhost",
                httpOnly: true,
                maxAge: 86400000,
                secure: true,
            });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                message: "mockedToken",
                maxAge: 86400000,
            });
        });

        it("should return an error when login fails", async () => {
            // Mock the User.login to reject with an error
            User.login.mockRejectedValue(new Error("Unable to login"));

            // Mock the request and response objects
            const req = {
                body: {
                    email: "john.doe@example.com",
                    password: "password123",
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            // Call the controller method
            await authController.login(req, res);

            // Expectations
            expect(User.login).toHaveBeenCalledWith(
                req.body.email,
                req.body.password
            );
            expect(res.status).toHaveBeenCalledWith(400);
        });
    });
});
