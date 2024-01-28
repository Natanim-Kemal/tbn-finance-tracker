import React, { useState, useEffect } from "react";

const InvestmentTable = () => {

const [investments, setInvestments] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const dataFromDB = [
            { id: 1, company: "ABC Corp", share: 50, price: 100, yield: 3, annualIncome: 1500 },
            { id: 2, company: "XYZ Ltd", share: 30, price: 80, yield: 4, annualIncome: 1200 },
        ];
    setInvestments(dataFromDB);
    };
    fetchData();
}, []);

const addRandomRow = () => {
    const newInvestment = {
        id: Math.floor(Math.random() * 1000),
        company: "New Company",
        share: Math.floor(Math.random() * 100),
        price: Math.floor(Math.random() * 200),
        yield: Math.floor(Math.random() * 5),
        annualIncome: Math.floor(Math.random() * 2000),
    };


    setInvestments((prevInvestments) => [...prevInvestments, newInvestment]);
};

return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="inv-table-head">Company</th>
            <th className="inv-table-head">Share</th>
            <th className="inv-table-head">Price</th>
            <th className="inv-table-head yield">Yield</th>
            <th className="inv-table-head">Annual Income</th>
          </tr>
        </thead>
        <tbody>
          {investments.map((investment) => (
            <tr key={investment.id}>
              <td>{investment.company}</td>
              <td>{investment.share}</td>
              <td>{investment.price}</td>
              <td className="yield">{investment.yield}</td>
              <td>{investment.annualIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentTable;
