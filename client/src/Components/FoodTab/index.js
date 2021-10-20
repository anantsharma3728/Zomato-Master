import React, { useState, useEffect } from "react";
import {BsHandbag} from "react-icons/bs";
import {GiMorgueFeet} from "react-icons/gi";
import {IoBeerOutline} from "react-icons/io5";
import {MdOutlineDining} from "react-icons/md";
import { useParams, Link } from "react-router-dom";

const TabSm = () => {

const [allTypes, setAllTypes] = useState([
  {
    id: `delivery`,
    icon: <BsHandbag />,
    name: "Delivery",
    isActive: false
  },
  {
    id: `DiningOut`,
    icon: <GiMorgueFeet />,
    name: "Dining Out",
    isActive: false
  },
  {
    id: `NightLife`,
    icon: <IoBeerOutline />,
    name: "Night Life",
    isActive: false
  },
]);

const {type} = useParams();

  return (
      <>
        <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
          {allTypes.map((items) => (
            <Link to={`/${items.id}`}>
              <div
                className={
                  type === items.id
                    ? "flex flex-col relative items-center text-xl text-zomato-400 "
                    : "flex flex-col items-center text-xl "
                }
              >
                <div
                  className={
                    type === items.id &&
                    "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                  }
                />
                {items.icon}
                <h5 className="text-sm">{items.name}</h5>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  const TabLg = () => {

  const [allTypes, setAllTypes] = useState([
    {
      id: `delivery`,
      icon: <BsHandbag />,
      name: "Delivery",
      isActive: false
    },
    {
      id: `DiningOut`,
      icon: <MdOutlineDining />,
      name: "Dining Out",
      isActive: false
    },
    {
      id: `NightLife`,
      icon: <IoBeerOutline />,
      name: "Night Life",
      isActive: false
    },
  ]);

  const {type} = useParams();

    return (
        <>
          <div className="bg-white py-3 z-10 w-1/2 flex items-center justify-between md:justify-evenly text-gray-500 ml-12">
            {allTypes.map((items) => (
              <Link to={`/${items.id}`}>
                <div
                  className={
                    type === items.id
                      ? "flex relative items-center text-xl text-zomato-400"
                      : "flex items-center text-xl "
                  }
                >
                  <div
                    className={
                      type === items.id &&
                      "absolute -bottom-3 w-full border-b-2 border-zomato-400"
                    }
                  />
                  <div className="px-4">{items.icon}</div>
                  <h5 className="text-xl">{items.name}</h5>
                </div>
              </Link>
            ))}
          </div>
        </>
      );
    };

const FoodTab = () => {
  return (
    <>
      <div>
        <TabSm />
      </div>
      <div className="hidden lg:flex">
        <TabLg />
      </div>
    </>
  )
};

export default FoodTab;
