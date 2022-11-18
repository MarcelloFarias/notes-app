import React from "react";
import './style.css';

const ColorsList = ({ children }) => {
    return (
        <>  
            <ul className="dots-list">
                {children}
            </ul>
        </>
    );
}

export default ColorsList;