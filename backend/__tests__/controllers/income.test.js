const incomeController = require("../../controllers/incomeController");
const incomeService = require("../../services/incomeService");

jest.mock("../../services/incomeService");
const mockIncome = {
    _id: "4444",
    user: "1234",
    name: "Income",
    amount: 10000,
    category: "Salary",
    description: "Work salary",
    date: new Date(),
};

describe("addIncome", () => {
    it("should add a new Income and return success", async () => {
        incomeService.addIncome.mockResolvedValue(mockIncome);

        const req = {
            body: {
                name: mockIncome.name,
                amount: mockIncome.amount,
                category: mockIncome.category,
                description: mockIncome.description,
                date: mockIncome.date,
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controll method
        await incomeController.addIncome(req, res);

        // Expectations
        expect(incomeService.addIncome).toHaveBeenCalledWith({
            req,
            name: req.body.name,
            amount: req.body.amount,
            category: req.body.category,
            description: req.body.description,
            date: req.body.date,
        });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockIncome);
    });
    it("should return an error when addIncome fails", async () => {
        const mockError = new Error("Failed to add Income");
        incomeService.addIncome.mockRejectedValue(mockError);

        const req = {
            body: {
                name: mockIncome.name,
                amount: mockIncome.amount,
                category: mockIncome.category,
                description: mockIncome.description,
                date: mockIncome.date,
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controll method
        await incomeController.addIncome(req, res);

        // Expectations
        expect(incomeService.addIncome).toHaveBeenCalledWith({
            req,
            name: req.body.name,
            amount: req.body.amount,
            category: req.body.category,
            description: req.body.description,
            date: req.body.date,
        });
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Error" });
    });
});

describe("getIncomes", () => {
    it("should return incomes when getIncomes is successful", async () => {
        incomeService.getIncomes.mockResolvedValue(mockIncome);

        // Mock the request and response objects
        const req = { user: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await incomeController.getIncomes(req, res);

        // Expectations
        expect(incomeService.getIncomes).toHaveBeenCalledWith(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockIncome);
    });

    it("should return an error when getIncomes fail", async () => {
        const mockError = new Error("Failed to create Income");
        incomeService.getIncomes.mockRejectedValue(mockError);

        // Mock the request and response objects
        const req = { user: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await incomeController.getIncomes(req, res);

        // Expectations
        expect(incomeService.getIncomes).toHaveBeenCalledWith(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Error" });
    });
});

describe("deleteIncome", () => {
    it("should return deleted Income when deleteIncome successful", async () => {
        incomeService.deleteIncome.mockResolvedValue(mockIncome);

        // Mock the request and response objects
        const req = { params: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await incomeController.deleteIncome(req, res);

        // Expectations
        expect(incomeService.deleteIncome).toHaveBeenCalledWith(req.params.id);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockIncome);
    });
});
