import { useState, useEffect } from "react"
import utils from "./scripts"
import "./scss/popup.scss"


function IndexPopup() {
  const [data, setData] = useState({
    url: '',
  });
  useEffect(() => {
  chrome.runtime.sendMessage({ action: 'getInitialUrl' });
  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'urlUpdate') {
      setData((data) => ({ ...data, url: message.url }));
    }
  });
  }, []);
  
  return (
    <div className="mainDiv">
      <div className="header">
        <div className="coins">
          <img src="https://picsum.photos/20/30" alt="coin image"/>
          <p className="coins-text"></p>
        </div>
        {data.url && <p className="url">{utils.parseUrlDomain(data.url)}</p>}
        <img src="https://picsum.photos/30/30" alt="settings"/>
      </div>
    </div>
  )
}

export default IndexPopup
