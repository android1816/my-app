import React from 'react'
import Config from './options/Config';
import Info from './options/Info';
import LiveView from './options/LiveView';
import Picture from './options/Picture';



const Advanced = (props) => {

    const {option, listVideo} = props;

    return (
      <div className="advanced">

        <div className="text-top">IP CAMERA</div>

        {(() => {
          switch (option) {
            case "LiveView":
              return <LiveView listVideo={listVideo} />;

            case "Picture":
              return <Picture listVideo={listVideo} />;
              
            case "Config":
                return <Config listVideo={listVideo} />;
            
            case "Info":
                return <Info listVideo={listVideo} />;

            case "Account":
                return <div>Info</div>;
            default:
              return <div>You are a User.</div>;
          }
        })()}
      </div>
    );
}

export default Advanced;