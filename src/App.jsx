import { Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900">
      <Header />
      <Main />
      
    </div>
  );
};

export default App;
