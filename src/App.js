import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Advanced from './components/Advanced';
import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
function App() {

  const [option, setOption] = useState(null);
  const [viewAll, setViewAll] = useState(false);

  const callbackOption = (childData) => {
    setOption(childData);
    console.log(option);
  }

  const callBackViewAll = (viewAll) =>{
    setViewAll(viewAll);
    console.log("view ", viewAll);
  }

  const listVideo = [
    {link: "https://www.youtube.com/embed/xKjgKgv0xjY"},
    {link: "https://www.youtube.com/embed/xKjgKgv0xjY"},
    {link: "https://www.youtube.com/embed/Lg66oRtpgQA"},
    {link: "https://www.youtube.com/embed/xKjgKgv0xjY"},
    {link: "https://www.youtube.com/embed/xKjgKgv0xjY"},
    {link: "https://www.youtube.com/embed/Lg66oRtpgQA"},
    {link: "https://www.youtube.com/embed/xKjgKgv0xjY"},
    {link: "https://www.youtube.com/embed/Lg66oRtpgQA"},
  ];
  return (
    <div className="App">
      <div className="col-1">
        <Sidebar parentCallback={callbackOption} />
      </div>
      <div className={`col-15 ${option ? null : "hide"}`}>
        <Advanced 
          option={option} 
          listVideo={listVideo}
        />
      </div>
      
      <div className="col-2">
        <div className="header"><Header 
          parentCallback={callbackOption} 
          viewAll = {callBackViewAll}
        /></div>
        <div className="content">
          <Main 
            listVideo={listVideo}
            option={viewAll}
          />
        </div>
      </div>
        
    </div>
  );
}

export default App;
