import React, {useState} from 'react'

const MenuItem = (props) => {
    const {name, icon, active, onActive} = props;

    console.log(active);
    return (
        <div onClick={onActive}>
            <li className={`sub-item ${active? "active" : ""} `}>
                <div className="icon-item">
                    <i className={icon}></i>
                </div>
                <div className="name-item">{name}</div>
            </li>
        </div>
    )
}

export default MenuItem;
