import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { RequestTypes, WebObjectType } from "./types";

export const FullPicture = () => {
  const [onInsta, setOnInsta] = useState(false);
  const [location, setLocation] = useState(String);

  const getFullPictureInstaUrl = () => `${location}media/?size=1`;

  const onInstaScope = (location: string) =>
    location.includes("https://www.instagram");

  const handleFullPicture = () => {
    chrome.runtime.sendMessage({
      type: RequestTypes.SET_WEB,
      location: getFullPictureInstaUrl,
    });
  };

  useEffect(() => {
    chrome.runtime.sendMessage({ type: RequestTypes.REQUEST_WEB_STATUS });
    chrome.runtime.onMessage.addListener((message: WebObjectType) => {
      switch (message.type) {
        case RequestTypes.WEB_STATUS:
          setLocation(message.location);
          setOnInsta(onInstaScope(message.location));
        default:
          break;
      }
    });
  }, []);

  return onInsta ? (
    <Button variant="outlined" onClick={handleFullPicture}>
      fullpic
    </Button>
  ) : null;
};
