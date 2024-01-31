import React from 'react'
import "./css/setting.css"
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import courseIcon from "../icons/courses.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";

export default function Setting() {
    const menus = [
        {id: 1,name: "Dashboard",active: false, iconSrc: dashboardIcon,},
        { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
        { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
        { id: 5, name: "Courses", active: false, iconSrc: courseIcon },
        { id: 6, name: "Wallet", active: false, iconSrc: walletIcon },];
        return(
            <div className="setting-body">
                <Menu menus={menus}/>
                <div className=".setting-content">
                    <div className="settings">
                        <div className="settingsWrapper">
                            <div className="settingsTitle">
                                <span className="settingsUpdateTitle">Update Your Profile </span>
                                <span className="settingsLogOutBth">Log Out</span>
                            </div>
                            <form  className="settingForm">
                                <label >Profile Picture</label>
                                <div className="settingsPP">
                                    <img className="settingsImg" src="https://plus.unsplash.com/premium_photo-1675034393381-7e246fc40755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="img" />
                                    <label htmlFor="fileInput">
                                        <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                                    </label>
                                    <input type="file"  id="fileInput" />
                                </div>
                                <label >Username</label>
                                <input type="text" placeholder="Abebe" />
                                <label >Email</label>
                                <input type="email" placeholder="abe@gmail.com" />
                                <label >Password</label>
                                <input type="password"  />
                                <button className="settingsSubmit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>    
  )                 
}
