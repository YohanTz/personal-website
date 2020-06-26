import React from 'react';
import ScriptTag from 'react-script-tag';

const DarkModeSlider = () => {
    return (
        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className="slider round"></div>
            </label>
            <em>Enable Dark Mode!</em>
            <ScriptTag type="text/javascript" src="/Darkmode.js"></ScriptTag>
        </div>
    )
}

export default DarkModeSlider;