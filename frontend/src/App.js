import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Expenses from "./components/Expenses.js";
import LoginSignup from "./components/LoginSignup.jsx";
import DashBoard from "./components/DashBoard.jsx";
import Budget from "./components/budget.jsx";
import Wallet from "./components/Wallet.jsx";
import Investment from "./components/Investment.jsx";
import SidebarMenu from "./components/SidebarMenu.jsx";
import Course from "./components/Course.jsx"
import More from "./components/more.jsx";
import Setting from "./components/Setting.jsx";
import Goal from "./components/Goal.jsx";
import Income from "./components/Income.jsx";

export default function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" index element={<LoginSignup/>} />
    <Route path="/dashboard" element={<DashBoard/>} />
    <Route path="/budget" element={<Budget/>} />
    <Route path="/wallet" element={<Wallet/>} />
    <Route path="/investment" element={<Investment/>} />
    <Route path="/courses" element={<Course/>} />
    <Route path="/expense" element={<Expenses/>} />
    <Route path="/more" element={<More/>} />
    <Route path="/setting" element={<Setting/>} />
    <Route path="/goal" element={<Goal/>} />
    <Route path="/income" element={<Income/>} />
  </Routes>
</BrowserRouter>
);
}
