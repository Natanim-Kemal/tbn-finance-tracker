import React from "react";
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import courseIcon from "../icons/courses.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";
import Income from "./assest/cent-bag.png";
import Expense from "./assest/coins.png";
import Saving from "./assest/banknotes.png";
import "./css/DashBoard.css";
import Notify from "./assest/notification_bell.png";
import RenderLineChart from "./Graph";
import ProgressBar from "react-bootstrap/ProgressBar";
import Icon from "./Icons";
import moreIcon from "../icons/moreIcon.jpg";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function DashBoard() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);
  const menus = [
    { id: 1, name: "Dashboard", active: false, iconSrc: dashboardIcon },
    { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
    { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
    { id: 5, name: "Wallet", active: false, iconSrc: walletIcon },
    { id: 6, name: "More", active: false, iconSrc: moreIcon },
  ];

  const [Graph, setGraph] = useState("balance");
  const data1 = [
    { name: "Jan", amt: 3000 },
    { name: "Feb", amt: 8000 },
    { name: "Mar", amt: 10000 },
    { name: "Apr", amt: 5780 },
    { name: "May", amt: 47600 },
    { name: "Jun", amt: 30000 },
    { name: "Jul", amt: 3000 },
    { name: "Aug", amt: 8000 },
    { name: "Sep", amt: 10000 },
    { name: "Oct", amt: 5780 },
    { name: "Nov", amt: 47600 },
    { name: "Dec", amt: 30000 },
  ];

  const data2 = [
    { name: "Jan", amt: 1000 },
    { name: "Feb", amt: 3000 },
    { name: "Mar", amt: 6000 },
    { name: "Apr", amt: 580 },
    { name: "May", amt: 4600 },
    { name: "Jun", amt: 3000 },
    { name: "Jul", amt: 3000 },
    { name: "Aug", amt: 7000 },
    { name: "Sep", amt: 2000 },
    { name: "Oct", amt: 5080 },
    { name: "Nov", amt: 4760 },
    { name: "Dec", amt: 3000 },
  ];

  const data3 = [
    { name: "Jan", amt: 1000 },
    { name: "Feb", amt: 2000 },
    { name: "Mar", amt: 3000 },
    { name: "Apr", amt: 5080 },
    { name: "May", amt: 4760 },
    { name: "Jun", amt: 9000 },
    { name: "Jul", amt: 4500 },
    { name: "Aug", amt: 4900 },
    { name: "Sep", amt: 6000 },
    { name: "Oct", amt: 7080 },
    { name: "Nov", amt: 7600 },
    { name: "Dec", amt: 10000 },
  ];
  let GraphicalOverview;
  if (Graph == "balance") {
    GraphicalOverview = (
      <div className=" graphical-overview">
        <div className="overview-title">Total Balance Overview</div>
        <div className="Graph-Container">
          <RenderLineChart data={data1} />
        </div>
      </div>
    );
  }

  if (Graph == "expense") {
    GraphicalOverview = (
      <div className=" graphical-overview">
        <div className="overview-title">Total Expense Overview</div>
        <div className="Graph-Container">
          <RenderLineChart data={data2} />
        </div>
      </div>
    );
  }

  if (Graph == "saved") {
    GraphicalOverview = (
      <div className=" graphical-overview">
        <div className="overview-title">Money Saved Overview</div>
        <div className="Graph-Container">
          <RenderLineChart data={data3} />
        </div>
      </div>
    );
  }

  const [goals, setGoals] = useState([]);
  const [accountDetail, setAccountDetail] = useState({});
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  let totalBalance = 0;
  let totalSaved = 0;
  let totalExpense = 0;

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

    const fetchIncomes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getIncomes", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setIncomes(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching incomes:", error.message);
      }
    };

    const fetchExpenses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/getExpenses", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setExpenses(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching expenses:", error.message);
      }
    };

    fetchExpenses();
    fetchIncomes();
    fetchGoals();
  }, []);

  for (let income of incomes) {
    totalBalance += income.amount;
    console.log(income.amount, "income amount");
  }

  for (let expense of expenses) {
    totalExpense += expense.amount;
    console.log(expense.amount, "expense amount");
  }

  totalSaved = totalBalance - totalExpense;

  return (
    <div className="DashBoard">
      <Menu menus={menus} />
      <div className="dashboard-contents">
        <div className="notification-bar">
          <div className="page-title">DashBoard</div>
          <div className="notification-image">
            <img src={Notify} alt="" />
          </div>
        </div>
        <div className="financial-summary">
          <div className="summary-containers">
            <div
              className="summary-continer"
              onClick={() => {
                setGraph("balance");
              }}
            >
              <img src={Income} alt="" />
              <p className="summary-description">Total Balance</p>
              <div className="amount">
                {typeof totalBalance === "number"
                  ? isNaN(totalBalance)
                    ? "0 Birr"
                    : totalBalance + " Birr"
                  : "0 Birr"}
              </div>
            </div>

            <div className="summary-continer" onClick={() => {setGraph("expense")}}>
              <img src={Expense} alt="" />
              <p className="summary-description">Total Expenses</p>
              <div className="amount">
                {typeof totalExpense === "number"
                  ? isNaN(totalExpense)
                    ? "0 Birr"
                    : totalExpense + " Birr"
                  : "0 Birr"}
              </div>
            </div>

            <div
              className="summary-continer"
              onClick={() => {
                setGraph("saved");
              }}
            >
              <img src={Saving} alt="" />
              <p className="summary-description">Money Saved</p>
              <div className="amount">
                {typeof totalSaved === "number"
                  ? isNaN(totalSaved)
                    ? "0 Birr"
                    : totalSaved + " Birr"
                  : "0 Birr"}
              </div>
            </div>
          </div>
          {GraphicalOverview}
        </div>
        <div className="budget-review">
          {/* <div className="overview-title">Budget</div>

          <div className="graphical-budget">
            <div className="circle-container">
              <div className="circle first-circle">
                <div className="budegttext">
                  3500 birr
                  <br />
                  Online Shop
                </div>
              </div>
              <div className="circle second-circle">
                <div className="budegttext">
                  1200 birr
                  <br />
                  food
                </div>
              </div>
              <div className="circle third-circle">
                <div className="budegttext">
                  500 birr
                  <br />
                  Bill
                </div>
              </div>
            </div>
          </div> */}
          <div className="monthly-comparison">
            <div>
              <div className="comparison-text">
                <p>Goal Progress</p>
              </div>
              {goals && goals.length > 0 ? (
                goals.map((item) => (
                  <div key={item.goalId} className="progressbar-container">
                    <div className="currentmonth">{item.goalName}</div>
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
        </div>
        <div className="report">
          <div className="report-title">Report</div>
          <div className="report-item">
            <div className="item-1">
              <div className="report-icon">
                <Icon />
              </div>
              <div className="item-description">
                <div className="item-name">Kedede Abebe</div>
                <div className="item-type">Online payment</div>
                <div className="item-date">Jan 06,23</div>

                <div className="item-status">Done</div>

                <div className="amount">355 birr</div>
              </div>
            </div>

            <div className="item-2">
              <div className="report-icon">
                <Icon />
              </div>
              <div className="item-description">
                <div className="item-name">Kedede Abebe</div>
                <div className="item-type">Online payment</div>
                <div className="item-date">Jan 06,23</div>

                <div className="item-status">Done</div>

                <div className="amount">355 birr</div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
