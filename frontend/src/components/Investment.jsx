import React from "react";
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import courseIcon from "../icons/courses.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";
import"./css/investment.css"
import Buttons from "./buttons";
import MyForm from "./Form";
import { useState } from "react";
import InvestmentTable from "./InvestmentTable";
import moreIcon from"../icons/moreIcon.jpg"

export default function Investment(){
    const menus = [
        {id: 1,name: "Dashboard",active: false, iconSrc: dashboardIcon,},
        { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
        { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
        { id: 5, name: "Wallet", active: false, iconSrc: walletIcon  },
        { id: 6, name: "More", active: false, iconSrc:moreIcon },
    ];


        return(
            <div className="Investment">
                <Menu menus={menus}/>
                <div className="Investment-contents">
                    <div className="total">
                        Total Investment
                    </div>
                    <div className="form-container">
                        <MyForm
                            fields={[
                                { label: "Company", name: "Company", type: "text", placeholder: "Company", required:true},
                                { label: "Share", name: "Share", type: "number", placeholder: "Share",required:true},
                                { label: "Price", name: "Price", type: "number", placeholder: "Price",required:true},
                                { label: "Yield", name: "Yield", type: "text", placeholder: "Yield %",required:true},
                                { label: "Annual income", name: "Annualincome", type: "number", placeholder: "Annual income",required:true},
                        ]}/>
                    </div>
                    <div className="Table-container">
                        <InvestmentTable/>
                    </div>
                </div>
            </div>
        )
}