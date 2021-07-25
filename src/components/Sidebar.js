import { Divider } from 'antd';
import React, {useState} from 'react'
import MenuItem from './MenuItem'

const InfoItem = [
    {
        name: "Live View",
        icon: "bi bi-camera-video",
        option: "LiveView",
    },
    {
        name: "Picture",
        icon: "bi bi-card-image",
        option: "Picture",
    },
    {
        name: "Config",
        icon: "bi bi-gear",
        option: "Config",
    },
    {
        name: "Info",
        icon: "bi bi-info-circle",
        option: "Info",
    },
    {
        name: "Account",
        icon: "bi bi-person-circle",
        option: "Account",
    },
];

const Sidebar = (props) => {
    
    const sendData = (option) => {
        props.parentCallback(option);
    }

    const [active, setActive] = useState(null)

    return (
        <div className="sidebar">
            <div className="logo">
                <i class="bi bi-twitter"></i>
            </div>
            <hr />
            <ul className="list-item">
                {
                    InfoItem.length > 0 ? (
                        InfoItem.map((item, index)=>(
                            <div onClick={()=>{
                                sendData(item.option)
                            }
                            }>
                                <MenuItem 
                                    name = {item.name}
                                    icon = {item.icon}
                                    active = {index == active}
                                    onActive = {() => setActive(index)}
                                />
                            </div>
                            
                        ))
                    ) :null
                }
            </ul>
            
        </div>
    )
}

export default Sidebar;
