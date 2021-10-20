import React from "react";

//component
import DeliveryFoodCategory from "./DeliveryFoodCategory";
import FirstOrderCarousal from "../Carousal/FirstOrderCarousal";


const DeliverySm = () => {
  return (
    <>
    <h1 className="text-xl font-semibold my-3">Eat what makes you happy!</h1>
    <div className="flex flex-wrap justify-between gap-3 rounded-md">
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
      <DeliveryFoodCategory />
    </div>
    </>
  )
};

const DeliveryLg = () => {
  return (
    <>
    <div className="items-start flex flex-col ml-32 mt-4 mr-32">
    <h2 className="font-semi-bold text-gray-800 text-3xl">Inspiration For Your First Order</h2>
    <div className="container mt-4 items-center">
      <FirstOrderCarousal />
    </div>
</div>
    </>
  )
};


const DeliveryCarousal = () => {
  return (
    <>
      <div className="lg:hidden">
        {
          <DeliverySm />
        }
      </div>
        <div className="hidden lg:block">
          {
            <DeliveryLg />
          }
        </div>

    </>
  );
};

export default DeliveryCarousal;
