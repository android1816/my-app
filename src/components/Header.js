import React from 'react'
import { MenuFoldOutlined } from "@ant-design/icons";
const Header = (props) => {

    const sendData = (option) => {
        props.parentCallback(option);
    }

    const viewAll = (viewAll) => {
      props.viewAll(viewAll);
    }
    
    return (
      <>
        <div className="open-close" onClick={()=>sendData(null)}>
          <MenuFoldOutlined />
        </div>
        <div className="stream">
          {/* <button className="all-stream btn5-hover" onClick = {()=>viewAll(true)}>All Stream</button> */}
          {/* <button className="sub-stream btn5-hover"> Sub Stream</button> */}
        </div>
      </>
    );
}

export default Header;