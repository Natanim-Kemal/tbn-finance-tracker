const budgetController = require("../../controllers/budgetController");
const budgetService = require("../../services/budgetService");
const Budget = require("../../models/budget");

jest.mock("../../services/budgetService");
const mockBudget = {
    _id: "1111",
    user: "1234",
    totalAmount: 1000,
    category: "Food",
    startDate: new Date(),
    endDate: new Date(),
};

describe("createBudget", () => {
    it("should create a budget and return success", async () => {
        budgetService.createBudget.mockResolvedValue(mockBudget);

        // Mock the request and response objects
        const req = {
            body: {
                user: mockBudget.user,
                totalAmount: mockBudget.totalAmount,
                category: mockBudget.category,
                startDate: mockBudget.startDate,
                endDate: mockBudget.endDate,
            },
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await budgetController.createBudget(req, res);

        // Expectations
        expect(budgetService.createBudget).toHaveBeenCalledWith(
            req,
            req.body.totalAmount,
            req.body.category,
            req.body.startDate,
            req.body.endDate
        );
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            budget: mockBudget,
        });
    });
    it("should return an error when createBudget fails", async () => {
        // Mock the budgetService.createBudget to reject with an error
        const mockError = new Error("Failed to create budget");
        budgetService.createBudget.mockRejectedValue(mockError);

        // Mock the request and response objects
        const req = {
            body: {
                user: "1234",
                totalAmount: 1000,
                category: "Food",
                startDate: new Date(),
                endDate: new Date(),
            },
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await budgetController.createBudget(req, res);

        // Expectations
        expect(budgetService.createBudget).toHaveBeenCalledWith(
            req,
            req.body.totalAmount,
            req.body.category,
            req.body.startDate,
            req.body.endDate
        );
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Error" });
    });
});

describe("getBudgets", () => {
    it("should return budgets when getBudgets is successful", async () => {
        budgetService.getBudgets.mockResolvedValue(mockBudget);

        // Mock the request and response objects
        const req = { user: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await budgetController.getBudgets(req, res);

        // Expectations
        expect(budgetService.getBudgets).toHaveBeenCalledWith(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockBudget);
    });

    it("should return an error when getBudgets fails", async () => {
        // Mock the budgetService.getBudgets to reject with an error
        const mockError = new Error("Unable to retrieve budgets");
        budgetService.getBudgets.mockRejectedValue(mockError);

        // Mock the request and response objects
        const req = { user: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await budgetController.getBudgets(req, res);

        // Expectations
        expect(budgetService.getBudgets).toHaveBeenCalledWith(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Error" });
    });
});

describe("updateBudget", () => {
    it("should return updated budget when updateBudget is successful", async () => {
        budgetService.updateBudget.mockResolvedValue(mockBudget);

        // Mock the request and response objects
        const req = {
            params: { id: "1234" },
            body: {
                totalAmount: 1000,
                category: "Transport",
                startDate: new Date(),
                endDate: new Date(),
            },
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await budgetController.updateBudget(req, res);

        // Expectations
        expect(budgetService.updateBudget).toHaveBeenCalledWith(
            req.params.id,
            req.body
        );
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockBudget);
    });

    it("should return an error when updateBudget fails", async () => {
        // Mock the budgetService.updateBudget to reject with an error
        const mockError = new Error("Unable to update budget");
        budgetService.updateBudget.mockRejectedValue(mockError);

        // Mock the request and response objects
        const req = {
            params: { id: "1234" },
            body: {
                totalAmount: 1000,
                category: "Transport",
                startDate: new Date(),
                endDate: new Date(),
            },
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await budgetController.updateBudget(req, res);

        // Expectations
        expect(budgetService.updateBudget).toHaveBeenCalledWith(
            req.params.id,
            req.body
        );
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: "Error updating budget",
        });
    });
});

describe("deleteBudget", () => {
    it("should return deleted budget when deleteBudget is successful", async () => {
        budgetService.deleteBudget.mockResolvedValue(mockBudget);

        // Mock the request and response objects
        const req = { params: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await budgetController.deleteBudget(req, res);

        // Expectations
        expect(budgetService.deleteBudget).toHaveBeenCalledWith(req.params.id);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockBudget);
    });

    it("should return an error when deleteBudget fails", async () => {
        // Mock the budgetService.deleteBudget to reject with an error
        const mockError = new Error("Unable to delete budget");
        budgetService.deleteBudget.mockRejectedValue(mockError);

        // Mock the request and response objects
        const req = { params: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await budgetController.deleteBudget(req, res);

        // Expectations
        expect(budgetService.deleteBudget).toHaveBeenCalledWith(req.params.id);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: "Error deleting budget",
        });
    });

    it("should return 404 when no budget is found", async () => {
        // Mock the budgetService.deleteBudget to resolve with null
        budgetService.deleteBudget.mockResolvedValue(null);

        // Mock the request and response objects
        const req = { params: { id: "2567" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await budgetController.deleteBudget(req, res);

        // Expectations
        expect(budgetService.deleteBudget).toHaveBeenCalledWith(req.params.id);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: "Budget not found." });
    });
});
