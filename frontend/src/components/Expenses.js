import React, { useEffect, useState } from "react";
import "./css/expenses.css";
import trash from "../icons/trash.png";
import Menu from "./Menu";
import budgetIcon from "../icons/budge.png";
import dashboardIcon from "../icons/dashboard.png";
import expenseIcon from "../icons/expense.png";
import walletIcon from "../icons/wallet.png";
import moreIcon from "../icons/moreIcon.jpg";
import Buttons from "./buttons";
import edit from "./assest/edit.png"

const Expenses = () => {
  const menus = [
    { id: 1, name: "Dashboard", active: false, iconSrc: dashboardIcon },
    { id: 3, name: "Budget", active: false, iconSrc: budgetIcon },
    { id: 4, name: "Expense", active: false, iconSrc: expenseIcon },
    { id: 5, name: "Wallet", active: false, iconSrc: walletIcon },
    { id: 6, name: "More", active: false, iconSrc: moreIcon },
  ];

  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const [expenses, setExpenses] = useState([]);
  const [fetchExpensesOnMount, setFetchExpensesOnMount] = useState(true);

  useEffect(() => {
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
        console.log("Expenses fetched successfully:", data);
      } catch (error) {
        console.error("Error fetching expenses:", error.message);
      }
    };

    if (fetchExpensesOnMount) {
      // Call the function to fetch expenses when the component mounts
      fetchExpenses();
      setFetchExpensesOnMount(false);
    }
  }, [fetchExpensesOnMount]);

  const calculateTotal = () => {
    let totalExpenses = 0;
    for (let exp of expenses) {
      totalExpenses += exp.amount;
    }
    return <span>{totalExpenses}</span>;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    const addExpense = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/addExpense", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            name: formData.name,
            amount: Number(formData.amount),
            category: formData.category,
            description: formData.description,
            date: formData.date,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Expense added successfully:", data);
        setExpenses((prevExpenses) => [...prevExpenses, data]);
      } catch (error) {
        console.error("Error adding expense:", error.message);
      }
    };

    // Call the function to add the expense when the component mounts
    addExpense();
    console.log("Form data submitted", formData);
  };

  return (
    <div className="exp-main col-md-9 col-lg-9 col-sm-12">
      <Menu menus={menus} />
      <div className="expense-contents">
        <div className="header">
          <h3>Expenses</h3>
        </div>
        <div className="total-exp">
          <p>
            Total Expense:{" "}
            {typeof calculateTotal() === "number"
              ? isNaN(calculateTotal())
                ? "0 Birr"
                : calculateTotal() + " Birr"
              : "0 Birr"}
          </p>
        </div>
        <div className="row main-under">
          <div className="form col-md-6 col-lg-6 col-sm-12 expense-inputs">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="input1"
                  name="name"
                  placeholder="Expense title"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  class="form-control"
                  name="amount"
                  placeholder="Expense Amount"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  type="date"
                  class="form-control"
                  id="input3"
                  name="date"
                  placeholder="Enter A Date"
                  onChange={handleChange}
                />
              </div>
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
                <textarea
                  class="form-control"
                  id="textarea"
                  name="description"
                  rows="3"
                  placeholder="Add a Reference"
                  onChange={handleChange}
                ></textarea>
              </div>
              <Buttons content="Add Reference" onClick={handleSubmission} />
            </form>
          </div>
          <div className="side-list col-md-6 col-lg-6 col-sm-12">
            {Array.isArray(expenses) && expenses.length > 0 ? (
              expenses
                .slice()
                .reverse()
                .map((expense) => (
                  <div key={expense.id} className="side-cont">
                    <div className="fir"></div>
                    <div className="sec">
                      <div className="sec-top">
                        <div className="elipse"></div>
                        <div>{expense.name}</div>
                      </div>
                      <div className="sec-bot">
                        <span className="amount">{`ETB ${expense.amount}`}</span>
                        <span className="date">{expense.date}</span>
                        <span className="note">{expense.description}</span>
                      </div>
                    </div>
                    <div className="crud">
                      <img src={trash} alt="Delete" />
                      <img src={edit} alt="edit" className="edit-but"/>
                    </div>
                    
                  </div>
                ))
            ) : (
              <p>You haven't made any expense</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
