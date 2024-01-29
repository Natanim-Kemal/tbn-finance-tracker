const reminderController = require("../../controllers/reminderController");
const reminderService = require("../../services/reminderService");

jest.mock("../../services/reminderService");

const mockReminder = {
    _id: "3333",
    user: "1234",
    description: "Test reminder",
    dueDate: new Date(),
    isRecurring: false,
};

describe("createReminder", () => {
    it("should create a new reminder and return success", async () => {
        reminderService.createReminder.mockResolvedValue(mockReminder);

        const req = {
            body: {
                description: mockReminder.description,
                dueDate: mockReminder.dueDate,
                isRecurring: mockReminder.isRecurring,
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await reminderController.createReminder(req, res);

        // Expectations
        expect(reminderService.createReminder).toHaveBeenCalledWith({
            req,
            description: req.body.description,
            dueDate: req.body.dueDate,
            isRecurring: req.body.isRecurring,
        });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockReminder);
    });

    it("should return an error when createReminder fails", async () => {
        const mockError = new Error("Failed to create reminder");
        reminderService.createReminder.mockRejectedValue(mockError);

        const req = {
            body: {
                description: mockReminder.description,
                dueDate: mockReminder.dueDate,
                isRecurring: mockReminder.isRecurring,
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await reminderController.createReminder(req, res);

        // Expectations
        expect(reminderService.createReminder).toHaveBeenCalledWith({
            req,
            description: req.body.description,
            dueDate: req.body.dueDate,
            isRecurring: req.body.isRecurring,
        });
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: "Error" });
    });
});

describe("getReminder", () => {
    it("should return reminders when getReminder is successful", async () => {
        reminderService.getReminder.mockResolvedValue(mockReminder);

        // Mock the request and response objects
        const req = { user: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await reminderController.getReminder(req, res);

        // Expectations
        expect(reminderService.getReminder).toHaveBeenCalledWith(req, res);
        expect(res.status).toHaveBeenCalledWith(expect.any(Number));
        expect(res.json).toHaveBeenCalledWith(mockReminder);
    });

    it("should return an error when getReminder fails", async () => {
        const mockError = new Error("Failed to get reminder");
        reminderService.getReminder.mockRejectedValue(mockError);

        // Mock the request and response objects
        const req = { user: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await reminderController.getReminder(req, res);

        // Expectations
        expect(reminderService.getReminder).toHaveBeenCalledWith(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Error" });
    });
});

describe("updateReminder", () => {
    it("should update a reminder and return success", async () => {
        reminderService.updateReminder.mockResolvedValue(mockReminder);

        const req = {
            params: { id: mockReminder._id },
            body: mockReminder,
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await reminderController.updateReminder(req, res);

        // Expectations
        expect(reminderService.updateReminder).toHaveBeenCalledWith(
            req.params.id,
            req.body
        );
        expect(res.status).toHaveBeenCalledWith(expect.any(Number));
        expect(res.json).toHaveBeenCalledWith(mockReminder);
    });

    it("should return an error when updateReminder fails", async () => {
        const mockError = new Error("Failed to update reminder");
        reminderService.updateReminder.mockRejectedValue(mockError);

        const req = {
            params: { id: mockReminder._id },
            body: mockReminder,
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await reminderController.updateReminder(req, res);

        // Expectations
        expect(reminderService.updateReminder).toHaveBeenCalledWith(
            req.params.id,
            req.body
        );
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Error" });
    });
});

describe("deleteReminder", () => {
    it("should delete a reminder and return success", async () => {
        reminderService.deleteReminder.mockResolvedValue({
            message: "Reminder deleted successfully",
        });

        const req = {
            params: { id: mockReminder._id },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await reminderController.deleteReminder(req, res);

        // Expectations
        expect(reminderService.deleteReminder).toHaveBeenCalledWith(
            req.params.id
        );
        expect(res.status).toHaveBeenCalledWith(expect.any(Number));
        expect(res.json).toHaveBeenCalledWith({
            message: "Reminder deleted successfully",
        });
    });

    it("should return an error when deleteReminder fails", async () => {
        const mockError = new Error("Failed to delete reminder");
        reminderService.deleteReminder.mockRejectedValue(mockError);

        const req = {
            params: { id: mockReminder._id },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await reminderController.deleteReminder(req, res);

        // Expectations
        expect(reminderService.deleteReminder).toHaveBeenCalledWith(
            req.params.id
        );
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Error" });
    });
});
