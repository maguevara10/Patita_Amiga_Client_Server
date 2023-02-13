import React from 'react';
import Axios from 'axios';
import "./Popup.css";
import { useState, useEffect } from 'react';

function Popup(props) {

    return (props.trigger) ? (
        <div className='popup'>
            <div className='inner-popup'>
                <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
                {props.children}
            </div>

        </div>
    ) : "";
}

export default Popup;