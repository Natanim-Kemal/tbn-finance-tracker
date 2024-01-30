import React, { useState, useEffect } from 'react';
import "./css/goalProgress.css"

export default function GoalProgress() {
    const [formData, setFormData] = useState({
        currentAmount: 200,
        targetAmount: 4000
    });

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (formData.targetAmount > 0) {
            setProgress((formData.currentAmount / formData.targetAmount) * 100);
        }
    }, [formData]);

    return (
        <div className="GoalProgress">
            <h2>Goal Progress</h2>
            <div className="progress-bar">
                <div 
                    className="progress-bar-fill" 
                    style={{width: `${progress}%`}}
                ></div>
            </div>
            <p>Current Amount: {formData.currentAmount}</p>
            <p>Target Amount: {formData.targetAmount}</p>
        </div>
    );
}
