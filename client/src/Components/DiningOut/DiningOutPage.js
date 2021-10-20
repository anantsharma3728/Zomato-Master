import React from "react";

import Collection from "./CollectionCarousal";
import {AiFillCaretRight} from "react-icons/ai";

const DiningOutLg = () => {
  return (
    <>
      <div className="ml-32 mr-32 flex flex-col">
        <h1 className="text-gray-800 text-3xl -mt-8 text-bold">Collections</h1>
        <div className="flex justify-between mt-8">
          <h3 className="text-gray-600 text-xl">Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends</h3>
          <div className="flex text-zomato-300 text-base items-center gap-2 cursor-pointer">
            <h4>All collection in Pune</h4>
            <div><AiFillCaretRight /></div>
          </div>
        </div>
        <div className="mt-2">
          <Collection />
        </div>
      </div>
    </>
  )
};

const DiningOutPage = () => {
  return (
    <>
      <div>
        {
          <DiningOutLg />
        }
      </div>
    </>
  )
};

export default DiningOutPage;
