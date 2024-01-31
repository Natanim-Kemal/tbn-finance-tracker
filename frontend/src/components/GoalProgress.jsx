import React, { useState, useEffect } from 'react';
import "./css/goalProgress.css";

export default function GoalProgress() {
    const [formData, setFormData] = useState({
        currentAmount: 900,
        targetAmount: 4000
    });

    const [currentProgress, setCurrentProgress] = useState(0);
    const [targetProgress, setTargetProgress] = useState(0);

    useEffect(() => {
        if (formData.targetAmount > 0) {
            setCurrentProgress((formData.currentAmount / formData.targetAmount) * 100);
            setTargetProgress(100);
        }
    }, [formData]);

    const handleCurrentAmountChange = (event) => {
        setFormData({ ...formData, currentAmount: event.target.value });
    };

    return (
        <div className="GoalProgress">
            <h2>Goal Progress</h2>
            <div className="progress-bar">
                <div 
                    className="progress-bar-fill current" 
                    style={{width: `${currentProgress}%`}}
                ></div>
            </div>
            <p>Current Amount: {currentProgress.toFixed(2)}%</p>

            <div className="progress-bar">
                <div 
                    className="progress-bar-fill target" 
                    style={{width: `${targetProgress}%`}}
                ></div>
            </div>
            <p>Target Amount: {targetProgress.toFixed(2)}%</p>

            <div className="input-container">
                <label htmlFor="currentAmountInput">Update Current Amount:</label>
                <input
                    id="currentAmountInput"
                    type="number"
                    value={formData.currentAmount}
                    onChange={handleCurrentAmountChange}
                />
            </div>
        </div>
    );
}