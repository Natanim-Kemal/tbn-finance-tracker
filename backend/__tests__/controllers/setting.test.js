const settingController = require("../../controllers/settingController");
const settingService = require("../../services/settingService");

jest.mock("../../services/settingService");

const mockSetting = {
    _id: "3333",
    user: "1234",
    language: "English",
    currency: "USD",
    notificationPreferences: "Email",
};

describe("createSetting", () => {
    it("should create a new setting and return success", async () => {
        settingService.createSetting.mockResolvedValue(mockSetting);

        const req = {
            params: {
                id: mockSetting.user,
            },
            body: {
                language: mockSetting.language,
                currency: mockSetting.currency,
                notificationPreferences: mockSetting.notificationPreferences,
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await settingController.createSetting(req, res);

        // Expectations
        expect(settingService.createSetting).toHaveBeenCalledWith({
            req,
            language: req.body.language,
            currency: req.body.currency,
            notificationPreferences: req.body.notificationPreferences,
        });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockSetting);
    });

    it("should return an error when createSetting fails", async () => {
        const mockError = new Error("Failed to create setting");
        settingService.createSetting.mockRejectedValue(mockError);

        const req = {
            params: {
                id: mockSetting.user,
            },
            body: {
                language: mockSetting.language,
                currency: mockSetting.currency,
                notificationPreferences: mockSetting.notificationPreferences,
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await settingController.createSetting(req, res);

        // Expectations
        expect(settingService.createSetting).toHaveBeenCalledWith({
            req,
            language: req.body.language,
            currency: req.body.currency,
            notificationPreferences: req.body.notificationPreferences,
        });
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Error" });
    });
});

// You can add similar tests for getSettings, updateSetting, and deleteSetting.

describe("getSettings", () => {
    it("should return settings when getSettings is successful", async () => {
        settingService.getSettings.mockResolvedValue(mockSetting);

        // Mock the request and response objects
        const req = { user: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await settingController.getSettings(req, res);

        // Expectations
        expect(settingService.getSettings).toHaveBeenCalledWith(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockSetting);
    });

    it("should return an error when getSettings fails", async () => {
        const mockError = new Error("Failed to get settings");
        settingService.getSettings.mockRejectedValue(mockError);

        // Mock the request and response objects
        const req = { user: { id: "1234" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await settingController.getSettings(req, res);

        // Expectations
        expect(settingService.getSettings).toHaveBeenCalledWith(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "Error" });
    });
});

describe("deleteSetting", () => {
    it("should delete a setting and return success", async () => {
        settingService.deleteSetting.mockResolvedValue({
            message: "Setting deleted successfully",
        });

        const req = {
            params: { id: mockSetting._id },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await settingController.deleteSetting(req, res);

        // Expectations
        expect(settingService.deleteSetting).toHaveBeenCalledWith(
            req.params.id
        );
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            message: "Setting deleted successfully",
        });
    });

    it("should return an error when deleteSetting fails", async () => {
        const mockError = new Error("Failed to delete setting");
        settingService.deleteSetting.mockRejectedValue(mockError);

        const req = {
            params: { id: mockSetting._id },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await settingController.deleteSetting(req, res);

        // Expectations
        expect(settingService.deleteSetting).toHaveBeenCalledWith(
            req.params.id
        );
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: "Error deleting setting",
        });
    });
});
