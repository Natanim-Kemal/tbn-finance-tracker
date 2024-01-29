const notificationController = require("../../controllers/notificationController");
const notificationService = require("../../services/notificationService");

jest.mock("../../services/notificationService");

describe("sendNotification", () => {
    it("should send a notification and return success", async () => {
        notificationService.sendNotification.mockResolvedValue(true);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await notificationController.sendNotification(req, res);

        // Expectations
        expect(notificationService.sendNotification).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ success: true });
    });

    it("should return an error when sendNotification fails", async () => {
        const mockError = new Error("Failed to send notification");
        notificationService.sendNotification.mockRejectedValue(mockError);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await notificationController.sendNotification(req, res);

        // Expectations
        expect(notificationService.sendNotification).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: "Error" });
    });
});

describe("scheduleNotification", () => {
    it("should schedule a notification and return success", async () => {
        notificationService.scheduleNotification.mockResolvedValue(true);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await notificationController.scheduleNotification(req, res);

        // Expectations
        expect(notificationService.scheduleNotification).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ success: true });
    });

    it("should return an error when scheduleNotification fails", async () => {
        const mockError = new Error("Failed to schedule notification");
        notificationService.scheduleNotification.mockRejectedValue(mockError);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await notificationController.scheduleNotification(req, res);

        // Expectations
        expect(notificationService.scheduleNotification).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: "Error" });
    });
});

describe("clearNotification", () => {
    it("should clear a notification and return success", async () => {
        notificationService.clearNotification.mockResolvedValue(true);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await notificationController.clearNotification(req, res);

        // Expectations
        expect(notificationService.clearNotification).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ success: true });
    });

    it("should return an error when clearNotification fails", async () => {
        const mockError = new Error("Failed to clear notification");
        notificationService.clearNotification.mockRejectedValue(mockError);

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await notificationController.clearNotification(req, res);

        // Expectations
        expect(notificationService.clearNotification).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: "Error" });
    });
});
