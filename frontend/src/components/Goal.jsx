import "./css/goal.css";
import React, { useState } from "react";
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";
import Buttons from "./buttons";
import moreIcon from "../icons/moreIcon.jpg";
import GoalProgress from "./GoalProgress";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useEffect } from "react";

export default function Goal() {
  const [formData, setFormData] = useState({
    goalName: "",
    currentAmount: "",
    targetAmount: "",
    completionDate: "",
    description: "",
  });

  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/get-account-details/65b8dee258d56e0024df7fa4",
          {
            method: "GET",
            credentials: "include", // Include credentials if needed
            headers: {
              // Add headers if needed
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setAccountDetails(data);
        console.log("Account details fetched successfully:", data);
      } catch (error) {
        console.error("Error fetching account details:", error.message);
      }
    };

    fetchAccountDetails();
  }, []);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/get-goals", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setGoals(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching goals:", error.message);
      }
    };

    fetchGoals();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createGoal = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/create-goal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            goalName: formData.goalName,
            targetAmount: formData.targetAmount,
            deadline: formData.completionDate,
            goalDescription: formData.description,
            currentAmount: formData.currentAmount,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Goal created successfully:", data);
        setPage("old");
        window.location.reload();
      } catch (error) {
        console.error("Error creating goal:", error.message);
      }
    };

    // Call the function to create the goal
    createGoal();

    console.log("Form data submitted", formData);
  };
  const menus = [
    { id: 1, name: "Dashboard", active: false, iconSrc: dashboardIcon },
    { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
    { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
    { id: 5, name: "Wallet", active: false, iconSrc: walletIcon },
    { id: 6, name: "More", active: false, iconSrc: moreIcon },
  ];

  const [page, setPage] = useState("old");
  let Main;

  if (page == "new") {
    Main = (
      <div className="Goal-contents">
        <form className="goal-form">
          <label>
            Goal Name:
            <input type="text" name="goalName" onChange={handleChange} />
          </label>

          <label>
            Current Amount:
            <input type="number" name="currentAmount" onChange={handleChange} />
          </label>

          <label>
            Target Amount:
            <input type="number" name="targetAmount" onChange={handleChange} />
          </label>

          <label>
            Completion Date:
            <input type="date" name="completionDate" onChange={handleChange} />
          </label>

          <label>
            Goal Description:
            <textarea name="description" onChange={handleChange} />
          </label>

          <div className="goal-btn">
            <button type="submit" onClick={handleSubmit}>
              Set Goal
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    Main = (
      <div className="progressContianer">
        <div className="fetched">
          <div>
            <div className="main_title">
              <p>Goal Progress</p>
            </div>
            {goals && goals.length > 0 ? (
              goals.map((item) => (
                <div key={item.goalId} className="progressbar-container">
                  <div className="goalTittle">{item.goalName}</div>
                  <ProgressBar
                    variant="success"
                    now={(item.currentAmount * 100) / item.targetAmount}
                  />
                  <span>
                    {Math.round(
                      (item.currentAmount * 100) / item.targetAmount
                    ) + " %"}
                  </span>
                </div>
              ))
            ) : (
              <div>You haven't set any goal</div>
            )}
          </div>
        </div>
        <Buttons
          content="New Goal"
          onClick={() => {
            setPage("new");
          }}
        />
      </div>
    );
  }
  return (
    <div className="Goal">
      <Menu menus={menus} />
      {Main}
    </div>
  );
}
