import React from "react";
import './style.css';

const DotColor = ({ background, selectColor, selectedColor }) => {
    return (
        <>
            <li className={selectedColor === background ? 'dot active' : 'dot'} style={{background: background}} onClick={selectColor}></li>
        </>
    );
}

export default DotColor;