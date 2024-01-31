const userController = require("../../controllers/userController");
const userService = require("../../services/userService");

jest.mock("../../services/userService");

const mockRequestBody = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "securepassword",
    username: "johndoe",
    financialAccounts: ["account1", "account2"],
};

describe("UserController", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("createAccount", () => {
        it("should return success response on successful account creation", async () => {
            userService.createAccount.mockResolvedValue({
                success: true,
                message: "Account created successfully",
            });

            const req = { body: mockRequestBody };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await userController.createAccount(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                message: "Account created successfully",
            });
        });

        it("should return failure with invalid username format", async () => {
            userService.createAccount.mockResolvedValue({
                success: false,
                message: "Invalid username format",
            });

            const req = { body: { ...mockRequestBody, username: "1234" } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await userController.createAccount(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({
                message: "Invalid username format",
            });
        });
    });

    describe("createAccount", () => {
        it("should return failure with email already taken", async () => {
            userService.createAccount.mockResolvedValue({
                success: false,
                message: "User with this email already exists.",
            });

            const req = { body: mockRequestBody };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await userController.createAccount(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({
                message: "User with this email already exists.",
            });
        });
    });

    describe("getAccountDetails", () => {
        it("should return users account details", async () => {
            userService.getAccountDetails.mockResolvedValue({
                success: true,
                userDetails: {
                    // Mocked user details
                    userId: 123,
                    username: "testuser",
                },
            });

            const req = { params: { userId: 123 } };

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            await userController.getAccountDetails(req, res);

            // Expectations
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                success: true,
                userDetails: {
                    userId: 123,
                    username: "testuser",
                },
            });
        });
    });

    describe("updateProfile", () => {
        it("should return success response on successful profile update", async () => {
            // Mock the userService.updateProfile method to return a success response
            userService.updateProfile.mockResolvedValue({
                success: true,
                message: "Profile updated successfully",
            });

            // Mock the request object
            const req = {
                params: { userID: 123 },
                body: {
                    email: "newemail@test.com",
                },
            };

            // Mock the response object
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            // Call the controller method
            await userController.updateProfile(req, res);

            // Expectations
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                message: "Profile updated successfully",
            });
        });

        it("should return server error on failed profile update", async () => {
            // Mock the userService.updateProfile method to return a failure response
            userService.updateProfile.mockResolvedValue({
                success: false,
                message: "Failed to update profile",
            });

            // Mock the request object
            const req = {
                params: { userID: 123 },
                body: {
                    email: "newemail@test.com",
                },
            };

            // Mock the response object
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            // Call the controller method
            await userController.updateProfile(req, res);

            // Expectations
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({
                message: "Failed to update profile",
            });
        });
    });

    describe("linkFinancialAccount", () => {
        it("should return success response on successful link", async () => {
            // Mock the userService.linkFinancialAccount method to return a success response
            userService.linkFinancialAccount.mockResolvedValue({
                success: true,
                message: "Financial account linked successfully",
            });

            // Mock the request object
            const req = {
                body: {
                    userID: 123,
                    financeInstituteId: "abc123",
                    accountId: "xyz456",
                },
            };

            // Mock the response object
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            // Call the controller method
            await userController.linkFinancialAccount(req, res);

            // Expectations
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                message: "Financial account linked successfully",
            });
        });

        it("should return server error on failed link", async () => {
            // Mock the userService.linkFinancialAccount method to return a failure response
            userService.linkFinancialAccount.mockResolvedValue({
                success: false,
                message: "Failed to link financial account",
            });

            // Mock the request object
            const req = {
                body: {
                    userID: 123,
                    financeInstituteId: "abc123",
                    accountId: "xyz456",
                },
            };

            // Mock the response object
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            // Call the controller method
            await userController.linkFinancialAccount(req, res);

            // Expectations
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({
                message: "Failed to link financial account",
            });
        });
    });
});
