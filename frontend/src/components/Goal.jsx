import "./css/goal.css"
import React, { useState } from 'react';
import Menu from './Menu';
import budgetIcon from '../icons/budge.png';
import dashboardIcon from '../icons/dashboard.png';
import expenseIcon from '../icons/expense.png';
import walletIcon from '../icons/wallet.png';
import Buttons from './buttons';
import moreIcon from '../icons/moreIcon.jpg';
import GoalProgress from "./GoalProgress"

export default function Goal() {
    const [formData, setFormData] = useState({
        category: '',
        currentAmount: '',
        targetAmount: '',
        completionDate: '',
        description: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted', formData);
      };
    const menus = [
        {id: 1,name: "Dashboard",active: false, iconSrc: dashboardIcon,},
        { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
        { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
        { id: 5, name: "Wallet", active: false, iconSrc: walletIcon  },
        { id: 6, name: "More", active: false, iconSrc:moreIcon },
    ];
  return (
    <div className="Goal">
        <Menu menus={menus} />
        <div className="Goal-contents">
            <form onSubmit={handleSubmit}>
        <label>
          Goal Category:
          <select name="category" onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="Education">Education</option>
            <option value="Travel">Travel</option>
            <option value="Health">Health</option>
            <option value="Investment">Investment</option>
          </select>
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

        <div className="goal-btn"><button  type="submit">Set Goal</button></div>
        
            </form>
        </div>
        <div className="goal-display">
            <GoalProgress/>
        </div>
  </div>
  )
}
