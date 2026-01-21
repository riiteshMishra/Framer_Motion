import { Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import { useEffect, useState } from "react";
import SplashScreen from "./assets/pages/SplashScreen";
import Switch from "./assets/components/Advance/Switch";
import Advance from "./assets/components/Advance/Index";

const App = () => {
  const [windowLoaded, setWindowLoaded] = useState(false);
  const [active, setActive] = useState("Beginner");

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

      <Switch active={active} setActive={setActive} />
      {active === "Beginner" ? <Main /> : <Advance />}
    </div>
  );
};

export default App;
