import { useState, useEffect } from "react"
import "./scss/popup.scss"

function IndexPopup() {
  const [data, setData] = useState({
    url: '',
  });
  useEffect(() => {
  chrome.runtime.sendMessage({ action: 'getInitialUrl' });
  chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'urlUpdate') {
      setData({...data, url: message.url});
    }
  });
  }, []);
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: 250,
        height: 400,
        borderRadius: 25
      }}>
        <h1>{data.url}</h1>
    </div>
  )
}

export default IndexPopup
