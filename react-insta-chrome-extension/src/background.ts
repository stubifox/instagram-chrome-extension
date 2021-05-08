import { RequestTypes, WebObjectType } from "./types";

const queryCurrentUrl = (_cb: Function) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    chrome.runtime.sendMessage({ type: "WEB_STATUS", location: tabs[0].url });
    _cb();
  });
};
const sendWebStatus = () => {};

const setWebStatus = (location: string) => {
  // window.open(location, "_blank");
  console.log(location);
};
chrome.runtime.onMessage.addListener((message: WebObjectType) => {
  switch (message.type) {
    case RequestTypes.REQUEST_WEB_STATUS:
      // queryCurrentUrl(sendWebStatus);
      console.log("sending request");
      break;
    case RequestTypes.SET_WEB:
      setWebStatus(message.location);
    default:
      break;
  }
});
