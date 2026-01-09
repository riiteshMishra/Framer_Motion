import { Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import { useEffect, useState } from "react";
import SplashScreen from "./assets/pages/SplashScreen";

const App = () => {
  const [windowLoaded, setWindowLoaded] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setWindowLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!windowLoaded) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen w-full bg-gray-900">
      <Header />
      <Main />
    </div>
  );
};

export default App;
