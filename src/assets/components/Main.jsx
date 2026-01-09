import React, { useState } from "react";
import { details } from "../data/nav-links";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const Main = () => {
  const [activeBox, setActiveBox] = useState(1);
  return (
    <div className="container  flex md:justify-between gap-12 overflow-hidden flex-col sm:flex-row flex-wrap items-center justify-center">
      <LeftBox activeBox={activeBox} setActiveBox={setActiveBox} />
      <RightBox activeBox={activeBox} />
    </div>
  );
};

export default Main;
