import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { BiMenu, BiSearch } from "react-icons/bi";
import {MdLocationOn, MdOutlineDeliveryDining, MdOutlineDining, MdOutlineNightlife} from "react-icons/md";
import {AiFillCaretDown} from "react-icons/ai";

const NavSm = () => {
  return (
    <>
    <div className="items-center justify-between flex w-full shadow-lg p-4">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
    </div>
    <div className="flex items-center gap-3">
      <button className="bg-zomato-400 text-white py-2 px-3 rounded-md">Use App</button>
      <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
      <FaPizzaSlice />
      </span>
      </div>
    </div>
  </>
);
};

const NavMd = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full p-4 shadow-lg">
        <div class="w-12 h-12">
          <BiMenu className="w-full h-full"/>
        </div>
        <div className="w-40">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
        </div>
      </div>
    </>
  )
};


const NavLg = () => {
  return (
    <>
      <div className="container flex ml-28 mr-96 gap-8 items-center">
      <div className="w-28 h-6">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="logo"
        className="w-full h-full"
      />
      </div>
      <div className="w-full flex items-center bg-white gap-2 px-3 py-2 rounded-sm border shadow-md">
        <div className="flex w-1/3 items-center gap-2">
        <div className="w-8 h-8 text-zomato-400">
          <MdLocationOn className="w-full h-full"/>
        </div>
          <input className="w-full focus:outline-none" type="text" placeholder="Dattawadi, Shobhapur, Kasba Peth" />
        <div className="w-4 h-4">
          <AiFillCaretDown className="w-full h-full"/>
        </div>
        </div>
          <p className="text-gray-400 font-bold">|</p>
          <div className="flex w-2/3 items-center bg-white gap-2">
          <div className="w-6 h-6 text-gray-700">
            <BiSearch className="w-full h-full"/>
          </div>
            <input className="w-full focus:outline-none" type="text" placeholder="Search for restaurant, cuisine or a dish" />
          </div>
      </div>
      </div>
    </>
  )
};



const Navbar = () => {
  return (
    <>
      <nav className="bg-white items-center">
  <div className="md:hidden">
     {
     /*Mobile Screen*/
     <NavSm />
     }
  </div>
  <div className="hidden lg:hidden md:flex">
    {
      //Tablet Screen
      <NavMd />
    }
  </div>
  <div className="hidden lg:flex">
    {
      //Tablet Screen
      <NavLg />
    }
  </div>
      </nav>
    </>
  )
};

export default Navbar;
