const expenseController = require("../../controllers/expenseController");
const expenseService = require("../../services/expenseService");

jest.mock("../../services/expenseService");
const mockExpense = {
    _id: "3333",
    user: "1234",
    name: "Groceries",
    amount: 50,
    category: "Food",
    description: "Weekly groceries",
    date: new Date(),
};

const updatedMock = {
    _id: "3333",
    user: "1234",
    name: "new",
    amount: 150,
    category: "Clothing",
    description: "Clothes",
    date: new Date(),
};

describe("addExpense", () => {
    it("should add a new expense and return success", async () => {
        expenseService.addExpense.mockResolvedValue(mockExpense);

        const req = {
            body: {
                name: mockExpense.name,
                amount: mockExpense.amount,
                category: mockExpense.category,
                description: mockExpense.description,
                date: mockExpense.date,
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controll method
        await expenseController.addExpense(req, res);

        // Expectations
        expect(expenseService.addExpense).toHaveBeenCalledWith({
            req,
            name: req.body.name,
            amount: req.body.amount,
            category: req.body.category,
            description: req.body.description,
            date: req.body.date,
        });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockExpense);
    });
    it("should return an error when addExpense fails", async () => {
        const mockError = new Error("Failed to add Expense");
        expenseService.addExpense.mockRejectedValue(mockError);

        const req = {
            body: {
                name: mockExpense.name,
                amount: mockExpense.amount,
                category: mockExpense.category,
                description: mockExpense.description,
                date: mockExpense.date,
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controll method
        await expenseController.addExpense(req, res);

        // Expectations
        expect(expenseService.addExpense).toHaveBeenCalledWith({
            req,
            name: req.body.name,
            amount: req.body.amount,
            category: req.body.category,
            description: req.body.description,
            date: req.body.date,
        });
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: "Error" });
    });
});

describe("getExpenses", () => {
    it("should return expenses when getExpenses is successful", async () => {
        expenseService.getExpenses.mockResolvedValue(mockExpense);

        // Mock the request and response objects
        const req = { user: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await expenseController.getExpenses(req, res);

        // Expectations
        expect(expenseService.getExpenses).toHaveBeenCalledWith(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockExpense);
    });

    it("should return an error when getExpenses fail", async () => {
        const mockError = new Error("Failed to create expense");
        expenseService.getExpenses.mockRejectedValue(mockError);

        // Mock the request and response objects
        const req = { user: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await expenseController.getExpenses(req, res);

        // Expectations
        expect(expenseService.getExpenses).toHaveBeenCalledWith(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: "Error" });
    });
});

describe("updateExpense", () => {
    it("should return updated Expense when update Expense is successful", async () => {
        expenseService.updateExpense.mockResolvedValue(mockExpense);
        const updatedMockExpense = {
            _id: "1234",
            updatedName: "new",
            updatedAmount: 150,
            updatedCategory: "Clothing",
        };
        // Mock the request and response objects
        const req = {
            params: { id: "1234" },
            body: {
                updatedName: "new",
                updatedAmount: 150,
                updatedCategory: "Clothing",
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await expenseController.updateExpense(req, res);

        // Expectations
        expect(expenseService.updateExpense).toHaveBeenCalledWith(
            req.params.id,
            req.body
        );
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockExpense);
    });
});

describe("deleteExpense", () => {
    it("should return deleted Expense when deleteExpense successful", async () => {
        expenseService.deleteExpense.mockResolvedValue(mockExpense);

        // Mock the request and response objects
        const req = { params: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await expenseController.deleteExpense(req, res);

        // Expectations
        expect(expenseService.deleteExpense).toHaveBeenCalledWith(
            req.params.id
        );
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockExpense);
    });
});
