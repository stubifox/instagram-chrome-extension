import { useEffect, useState } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState(window.location.href);
  const listenToLocation = () => {
    setLocation(window.location.href);
    console.log("path changed" + window.location.href);
  };
  useEffect(() => {
    window.addEventListener("popstate", listenToLocation);
    return () => {
      window.removeEventListener("popstate", listenToLocation);
    };
  }, []);
  return location;
};
