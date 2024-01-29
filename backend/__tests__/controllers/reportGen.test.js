const reportGeneratorController = require("../../controllers/reportGenController");
const reportGeneratorService = require("../../services/reportGenService");
const User = require("../../models/user");

jest.mock("../../services/reportGenService");

describe("reportGeneratorController", () => {
    const mockUser = {
        _id: "1234",
        financialAccounts: [
            {
                name: "Salary",
                amount: 5000,
                isIncome: true,
                createdAt: new Date(),
            },
            {
                name: "Rent",
                amount: 1000,
                isIncome: false,
                createdAt: new Date(),
            },
        ],
    };

    const req = {
        params: {
            userID: mockUser._id,
        },
    };

    const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("generateExpenseReport", () => {
        it("should generate an expense report and return success", async () => {
            reportGeneratorService.generateExpenseReport.mockResolvedValue(
                mockUser.financialAccounts.filter(
                    (account) => !account.isIncome
                )
            );

            await reportGeneratorController.generateExpenseReport(req, res);

            expect(
                reportGeneratorService.generateExpenseReport
            ).toHaveBeenCalledWith(mockUser._id);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(
                mockUser.financialAccounts.filter(
                    (account) => !account.isIncome
                )
            );
        });

        it("should return an error when generateExpenseReport fails", async () => {
            const mockError = new Error("Failed to generate expense report");
            reportGeneratorService.generateExpenseReport.mockRejectedValue(
                mockError
            );

            await reportGeneratorController.generateExpenseReport(req, res);

            expect(
                reportGeneratorService.generateExpenseReport
            ).toHaveBeenCalledWith(mockUser._id);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: "Error" });
        });
    });

    describe("generateIncomeReport", () => {
        it("should generate an income report and return success", async () => {
            reportGeneratorService.generateIncomeReport.mockResolvedValue(
                mockUser.financialAccounts.filter((account) => account.isIncome)
            );

            await reportGeneratorController.generateIncomeReport(req, res);

            expect(
                reportGeneratorService.generateIncomeReport
            ).toHaveBeenCalledWith(mockUser._id);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(
                mockUser.financialAccounts.filter((account) => account.isIncome)
            );
        });

        it("should return an error when generateIncomeReport fails", async () => {
            const mockError = new Error("Failed to generate income report");
            reportGeneratorService.generateIncomeReport.mockRejectedValue(
                mockError
            );

            await reportGeneratorController.generateIncomeReport(req, res);

            expect(
                reportGeneratorService.generateIncomeReport
            ).toHaveBeenCalledWith(mockUser._id);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: "Error" });
        });
    });

    describe("generateCategoryReport", () => {
        it("should generate a category report and return success", async () => {
            reportGeneratorService.generateCategoryReport.mockResolvedValue(
                mockUser.financialAccounts.reduce((report, transaction) => {
                    const category = transaction.category || "Uncategorized";

                    if (!report[category]) {
                        report[category] = [];
                    }

                    report[category].push({
                        name: transaction.name,
                        amount: transaction.amount,
                        date: transaction.createdAt,
                    });

                    return report;
                }, {})
            );

            await reportGeneratorController.generateCategoryReport(req, res);

            expect(
                reportGeneratorService.generateCategoryReport
            ).toHaveBeenCalledWith(mockUser._id);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(
                mockUser.financialAccounts.reduce((report, transaction) => {
                    const category = transaction.category || "Uncategorized";

                    if (!report[category]) {
                        report[category] = [];
                    }

                    report[category].push({
                        name: transaction.name,
                        amount: transaction.amount,
                        date: transaction.createdAt,
                    });

                    return report;
                }, {})
            );
        });

        it("should return an error when generateCategoryReport fails", async () => {
            const mockError = new Error("Failed to generate category report");
            reportGeneratorService.generateCategoryReport.mockRejectedValue(
                mockError
            );

            await reportGeneratorController.generateCategoryReport(req, res);

            expect(
                reportGeneratorService.generateCategoryReport
            ).toHaveBeenCalledWith(mockUser._id);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: "Error" });
        });
    });
});
