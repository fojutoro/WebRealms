let lastUrl;

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'getInitialUrl') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.runtime.sendMessage({ action: 'urlUpdate', url: tabs[0].url});
        });
    }
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.active && changeInfo.url && changeInfo.url !== lastUrl) {
        lastUrl = changeInfo.url;
    chrome.runtime.sendMessage({ action: 'urlUpdate', url: lastUrl });
  }
});
