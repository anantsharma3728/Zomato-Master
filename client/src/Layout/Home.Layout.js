import React from "react";
import { useParams } from "react-router-dom";

//Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";
import Delivery from "../Components/Delivery";

const HomeLayout = (props) => {
  const { type } = useParams();
  return( <>
    <div className="container mx-auto lg:px-20">
    <Navbar />
    <div className="lg:mt-5 mb-24">
      <FoodTab />
    </div>
    <div className="m-4">
      {type=== "delivery" && <Delivery />}
    </div>
    {props.children}
    </div>
  </>
)
};

export default HomeLayout;
