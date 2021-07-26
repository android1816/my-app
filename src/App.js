import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Advanced from './components/Advanced';
import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import WebcamCapture from './components/WebCam';
function App() {

  const [option, setOption] = useState(null);
  const [capture, setCapture] = useState(false);

  const callBackOption = (childData) => {
    setOption(childData);
    console.log(option);
  }

  const callBackCapture = (capture) =>{
    setCapture(capture);
    console.log("view ", capture);
  }

  const listVideo = [
    {link: "https://www.youtube.com/embed/fNOfkNc9AJE"},
    {link: "https://www.youtube.com/embed/DIgv-e18OzA"},
    {link: "https://www.youtube.com/embed/A30IuIjQYYg"},
    {link: "https://www.youtube.com/embed/nLeiVZ9BDKA"},
    {link: "https://www.youtube.com/embed/5QhKCIt8QCw"},
    {link: "https://www.youtube.com/embed/qi52KQs67MY"},
    {link: "https://www.youtube.com/embed/he-aCCA2ONI"},
    {link: "https://www.youtube.com/embed/FSlj7_Fi8Us"},
  ];
  return (
    <div className="App">
      <div className="col-1">
        <Sidebar parentCallback={callBackOption} />
      </div>
      <div className={`col-15 ${option ? null : "hide"}`}>
        <Advanced 
          option={option} 
          listVideo={listVideo}
        />
      </div>
      
      <div className="col-2">
        <div className="header"><Header 
          parentCallback={callBackOption} 
          capture = {callBackCapture}
        /></div>
        <div className="content">
          <Main 
            listVideo={listVideo}
            capture={capture}
          />
        </div>
      </div>
        
    </div>
  );
}

export default App;
