import React, { useState } from 'react';
import "./css/alert.css"
const Alert = ({ message, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose && onClose();
    };

    return (
        <>
            {isVisible && (
                <div className='alert'>
                    <button onClick={handleClose} className='close-handle'>
                        x</button>
                    <p>ASDFGHJKL;ZGHJKLCVBNSD FGHJKASTYU
                        {message}
                    </p>
                </div>
        )}
        </>
    );
    };

export default Alert;
