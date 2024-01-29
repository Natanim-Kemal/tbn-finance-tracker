const investmentController = require("../../controllers/investmentController");
const investmentService = require("../../services/investmentService");

jest.mock("../../services/investmentService");

const mockInvestment = {
    _id: "3333",
    user: "1234",
    investmentName: "Test Investment",
    interestRate: 0.05,
    amountInvested: 1000,
    currentValue: 1050,
    investmentType: "Stocks",
};

describe("invest", () => {
    it("should create a new investment and return success", async () => {
        investmentService.invest.mockResolvedValue(mockInvestment);

        const req = {
            body: {
                investmentName: mockInvestment.investmentName,
                interestRate: mockInvestment.interestRate,
                amountInvested: mockInvestment.amountInvested,
                currentValue: mockInvestment.currentValue,
                investmentType: mockInvestment.investmentType,
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await investmentController.invest(req, res);

        // Expectations
        expect(investmentService.invest).toHaveBeenCalledWith({
            req,
            investmentName: req.body.investmentName,
            interestRate: req.body.interestRate,
            amountInvested: req.body.amountInvested,
            currentValue: req.body.currentValue,
            investmentType: req.body.investmentType,
        });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockInvestment);
    });

    it("should return an error when invest fails", async () => {
        const mockError = new Error("Failed to create investment");
        investmentService.invest.mockRejectedValue(mockError);

        const req = {
            body: {
                investmentName: mockInvestment.investmentName,
                interestRate: mockInvestment.interestRate,
                amountInvested: mockInvestment.amountInvested,
                currentValue: mockInvestment.currentValue,
                investmentType: mockInvestment.investmentType,
            },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await investmentController.invest(req, res);

        // Expectations
        expect(investmentService.invest).toHaveBeenCalledWith({
            req,
            investmentName: req.body.investmentName,
            interestRate: req.body.interestRate,
            amountInvested: req.body.amountInvested,
            currentValue: req.body.currentValue,
            investmentType: req.body.investmentType,
        });
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: "Error" });
    });
});

describe("updateInvestmentDetails", () => {
    it("should update an investment and return success", async () => {
        investmentService.updateInvestmentDetails.mockResolvedValue(
            mockInvestment
        );

        const req = {
            params: { id: mockInvestment._id },
            body: mockInvestment,
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await investmentController.updateInvestmentDetails(req, res);

        // Expectations
        expect(investmentService.updateInvestmentDetails).toHaveBeenCalledWith(
            req.params.id,
            req.body
        );
        expect(res.status).toHaveBeenCalledWith(expect.any(Number));
        expect(res.json).toHaveBeenCalledWith(mockInvestment);
    });

    it("should return an error when updateInvestmentDetails fails", async () => {
        const mockError = new Error("Failed to update investment");
        investmentService.updateInvestmentDetails.mockRejectedValue(mockError);

        const req = {
            params: { id: mockInvestment._id },
            body: mockInvestment,
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await investmentController.updateInvestmentDetails(req, res);

        // Expectations
        expect(investmentService.updateInvestmentDetails).toHaveBeenCalledWith(
            req.params.id,
            req.body
        );
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: "Error" });
    });
});

describe("deleteInvestment", () => {
    it("should delete an investment and return success", async () => {
        investmentService.deleteInvestment.mockResolvedValue({
            message: "Investment deleted successfully",
        });

        const req = {
            params: { id: mockInvestment._id },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await investmentController.deleteInvestment(req, res);

        // Expectations
        expect(investmentService.deleteInvestment).toHaveBeenCalledWith(
            req.params.id
        );
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            message: "Investment deleted successfully",
        });
    });

    it("should return an error when deleteInvestment fails", async () => {
        const mockError = new Error("Failed to delete investment");
        investmentService.deleteInvestment.mockRejectedValue(mockError);

        const req = {
            params: { id: mockInvestment._id },
        };

        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Call the controller method
        await investmentController.deleteInvestment(req, res);

        // Expectations
        expect(investmentService.deleteInvestment).toHaveBeenCalledWith(
            req.params.id
        );
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: "Error" });
    });
});
