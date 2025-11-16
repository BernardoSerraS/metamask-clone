import React, { useEffect, useState } from "react";
import { SplashScreen } from "./src/screens/SplashScreen";
import { Login } from "./src/screens/Login";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 5000);
  }, []);

  return showSplash ? <SplashScreen /> : <Login />;
}
