import React from "react";
import { useParams } from "react-router-dom";

//component
import DiningOut from "./DiningOut";
import NightLife from "./NightLife";

const Master = () => {
  const { type } = useParams();

  return(
    <>

    <div className="">
      {type=== "DiningOut" && <DiningOut />}
    </div>
    <div className="">
      {type=== "NightLife" && <NightLife />}
    </div>
    </>
  )
};

export default Master;
