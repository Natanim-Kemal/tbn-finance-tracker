import React from "react";
import Menu from "./components/Menu.js";
import Expenses from "./components/Expenses.js";
import { useState } from "react";
import budgetIcon from "./icons/budge.png";
import courseIcon from "./icons/courses.png";
import dashboardIcon from "./icons/dashboard.png";
import expenseIcon from "./icons/expense.png";
import logo from "./icons/logo.png";
import walletIcon from "./icons/wallet.png";

export default function App() {
  const menus = [
    {
      id: 1,
      name: "Dashboard",
      active: false,
      iconSrc: dashboardIcon,
    },
    { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
    { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
    { id: 5, name: "Courses", active: false, iconSrc: courseIcon },
    { id: 6, name: "Wallet", active: false, iconSrc: walletIcon },
  ];
  const [activeElement, setAE] = useState("");
  return (
    <div className="row">
      <Menu activeElement={activeElement} menus={menus}></Menu>
      <Expenses></Expenses>
    </div>
  );
}
