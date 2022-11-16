import React, { useState } from "react";
import './style.css';

const Header = () => {

    const [ isActive, setIsActive ] = useState(false);

    return (
        <>
            <header style={{height: isActive ? '20vh' : '10vh'}}>
                <div className="title-field">
                    <h1>Notes App</h1>
                    <button className="btn-search" onClick={() => setIsActive(!isActive )}>Search Note</button>
                </div>
                <div className='input-field' style={{display: isActive ? 'flex' : 'none'}}>
                    <input className="input-search" type="text" placeholder='Search Note Here...' />
                </div>
            </header>
        </>
    );
}

export default Header;