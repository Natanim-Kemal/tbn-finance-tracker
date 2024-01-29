const goalController = require("../../controllers/goalController");
const goalService = require("../../services/goalService");

jest.mock("../../services/goalService");
const mockGoal = {
    _id: "2222",
    user: "1234",
    goalName: "Saving",
    targetAmount: "10000",
    deadline: new Date(),
    goalDescription: "This is my goal",
    currentAmount: "2000",
};

describe("createGoal", () => {
    it("should create a goal and return success", async () => {
        goalService.createGoal.mockResolvedValue(mockGoal);

        // Mock the request and response objects
        const req = {
            body: {
                user: mockGoal.user,
                goalName: mockGoal.goalName,
                targetAmount: mockGoal.targetAmount,
                deadline: mockGoal.deadline,
                goalDescription: mockGoal.goalDescription,
                currentAmount: mockGoal.currentAmount,
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await goalController.createGoal(req, res);

        // Expectations
        expect(goalService.createGoal).toHaveBeenCalledWith({
            req: req,
            goalName: req.body.goalName,
            targetAmount: req.body.targetAmount,
            deadline: req.body.deadline,
            goalDescription: req.body.goalDescription,
            currentAmount: req.body.currentAmount,
        });

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockGoal);
    });
    it("should return an error when createGoal fails", async () => {
        const mockError = new Error("Failed to create Goal");
        goalService.createGoal.mockRejectedValue(mockError);

        // Mock the request and response objects
        const req = {
            body: {
                user: mockGoal.user,
                goalName: mockGoal.goalName,
                targetAmount: mockGoal.targetAmount,
                deadline: mockGoal.deadline,
                goalDescription: mockGoal.goalDescription,
                currentAmount: mockGoal.currentAmount,
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await goalController.createGoal(req, res);

        // Expectations
        expect(goalService.createGoal).toHaveBeenCalledWith({
            req: req,
            goalName: req.body.goalName,
            targetAmount: req.body.targetAmount,
            deadline: req.body.deadline,
            goalDescription: req.body.goalDescription,
            currentAmount: req.body.currentAmount,
        });

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Error" });
    });
});

describe("getGoals", () => {
    it("should return goals when getGoals is successful", async () => {
        goalService.getGoals.mockResolvedValue(mockGoal);

        // Mock the request and response objects
        const req = { user: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await goalController.getGoals(req, res);

        // Expectations
        expect(goalService.getGoals).toHaveBeenCalledWith(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockGoal);
    });

    it("should return an error when getGoals fail", async () => {
        const mockError = new Error("Failed to create Goal");
        goalService.getGoals.mockRejectedValue(mockError);

        // Mock the request and response objects
        const req = { user: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await goalController.getGoals(req, res);

        // Expectations
        expect(goalService.getGoals).toHaveBeenCalledWith(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Error" });
    });
});

describe("updateGoal", () => {
    it("should return updated goal when update Goal is successful", async () => {
        goalService.updateGoal.mockResolvedValue(mockGoal);

        // Mock the request and response objects
        const req = {
            params: { id: "1234" },
            body: {
                goalName: "But a new Car",
                targetAmount: "100000",
                deadline: new Date(),
                goalDescription: "Save money to buy a new car",
                currentAmount: 0,
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await goalController.updateGoal(req, res);

        // Expectations
        expect(goalService.updateGoal).toHaveBeenCalledWith(
            req.params.id,
            req.body
        );
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockGoal);
    });

    it("should return an error when updateGoal fails", async () => {
        // Mock the budgetService.updateBudget to reject with an error
        const mockError = new Error("Unable to update Goal");
        goalService.updateGoal.mockRejectedValue(mockError);

        // Mock the request and response objects
        const req = {
            params: { id: "1234" },
            body: {
                goalName: "But a new Car",
                targetAmount: "100000",
                deadline: new Date(),
                goalDescription: "Save money to buy a new car",
                currentAmount: 0,
            },
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await goalController.updateGoal(req, res);

        // Expectations
        expect(goalService.updateGoal).toHaveBeenCalledWith(
            req.params.id,
            req.body
        );
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: "Goal not updated",
        });
    });
});

describe("deleteGoal", () => {
    it("should return deleted goal when deleteGoal successful", async () => {
        goalService.deleteGoal.mockResolvedValue(mockGoal);

        // Mock the request and response objects
        const req = { params: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await goalController.deleteGoal(req, res);

        // Expectations
        expect(goalService.deleteGoal).toHaveBeenCalledWith(req.params.id);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockGoal);
    });
    it("should return 404 when no Goal is found", async () => {
        // Mock the budgetService.deleteBudget to resolve with null
        goalService.deleteGoal.mockResolvedValue(null);

        // Mock the request and response objects
        const req = { params: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await goalController.deleteGoal(req, res);

        // Expectations
        expect(goalService.deleteGoal).toHaveBeenCalledWith(req.params.id);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: "goal not found." });
    });
});
