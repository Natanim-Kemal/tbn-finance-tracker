import React from "react";
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import courseIcon from "../icons/courses.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";
import MyAccordion from "./Accordion";
import "../components/css/budget.css";
import Buttons from "./buttons";
import MyForm from "./Form";
import { useState } from "react";
import moreIcon from "../icons/moreIcon.jpg";

export default function Budget() {
  const [New, setNew] = useState("OldBudget");
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    totalAmount: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createBudget = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/create-budget",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              startDate: formData.startDate,
              endDate: formData.endDate,
              totalAmount: formData.totalAmount,
              category: formData.category,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Goal created successfully:", data);
      } catch (error) {
        console.error("Error creating goal:", error.message);
      }
    };

    // Call the function to create Budget
    createBudget();

    console.log("Form data submitted", formData);
  };
  const menus = [
    { id: 1, name: "Dashboard", active: false, iconSrc: dashboardIcon },
    { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
    { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
    { id: 5, name: "Wallet", active: false, iconSrc: walletIcon },
    { id: 6, name: "More", active: false, iconSrc: moreIcon },
  ];

  const inputs = {
    Date_1: "2020/12/03",
    Date_2: "2020/12/03",
    content_1: "Content for the first item.",
    content_2: "Content for the second item.",
  };

  let MainField;

  if (New === "OldBudget") {
    MainField = (
      <div className="budget-accordion">
        <MyAccordion
          title="Education"
          date="2020/12/03"
          incomeContent="Income Content"
          expenseContent="Expense Content"
        />
        <MyAccordion
          title="Education"
          date="2023/12/05"
          incomeContent="Income Content"
          expenseContent="Expense Content"
        />
        <MyAccordion
          title="Education"
          date="2024/12/09"
          incomeContent="Income Content"
          expenseContent="Expense Content"
        />
        <Buttons
          content={"Create New Budget"}
          onClick={() => {
            setNew("NewBudget");
          }}
        />
      </div>
    );
  }

  if (New === "NewBudget") {
    MainField = (
      <form>
        <div class="form-group">
          <select
            class="form-control"
            id="selectOption"
            name="category"
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="education">Education</option>
            <option value="groceries">Groceries</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="takeaways">Takeaways</option>
            <option value="clothing">Clothing</option>
            <option value="travelling">Travelling</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <input
            type="number"
            class="form-control"
            name="totalAmount"
            placeholder="Budget Amount"
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="input2"
            name="startDate"
            placeholder="Start Date"
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="input3"
            name="endDate"
            placeholder="End Date"
            onChange={handleChange}
          />
        </div>
        <Buttons content="Add Budget" onClick={handleSubmit} />
      </form>
    );
  }

  return (
    <div className="budget">
      <Menu menus={menus} />
      <div className="budget-contets">{MainField}</div>
    </div>
  );
}
