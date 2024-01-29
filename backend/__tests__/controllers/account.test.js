const { JsonWebTokenError } = require("jsonwebtoken");
const accountController = require("../../controllers/accountController");
const Account = require("../../models/account");
const Transaction = require("../../models/transaction");
const accountService = require("../../services/accountService");

jest.mock("../../services/accountService");

describe("AccountController", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("updateBalance", () => {
        it("should update account balance and return success", async () => {
            // Mock accountService.updateBalance to stimulate successfull update
            accountService.updateBalance.mockResolvedValue(true);

            // Mock the request and response objects
            const req = {
                params: { id: "1234" },
                body: {
                    amount: 100,
                },
            };

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            // Call the controller method
            await accountController.updateBalance(req, res);

            // Expectations
            expect(accountService.updateBalance).toHaveBeenCalledWith("1234", {
                amount: 100,
            });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                message: "Balance updated successfully",
            });
        });
        it("should handle errors during update and return 500 status", async () => {
            // Mock accountService.updateBalance to simulate an error during update
            accountService.updateBalance.mockRejectedValue(
                new Error("Update failed")
            );

            // Mock the request and response objects
            const req = {
                params: { id: "1234" },
                body: { amount: 100 },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            // Call the controller method
            await accountController.updateBalance(req, res);

            // Expectations
            expect(accountService.updateBalance).toHaveBeenCalledWith("1234", {
                amount: 100,
            });
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith(
                expect.objectContaining({
                    message: "Error",
                })
            );
        });
    });
});
