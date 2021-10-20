import React from "react";
import {AiFillStar} from "react-icons/ai";

import Poster from "../../Carousal/poster";

const FoodCard = () => {
  return (
    <>
    <div className="container mx-auto w-full">
      <div className="flex flex-col lg:ml-32 lg:mr-32 mt-4">
        <div className="text-3xl text-gray-900">Delivary Reastraunts In Pune</div>
        <div className="flex flex-wrap mt-16">
          <div className=" w-full md:w-1/2 lg:w-1/3">
            <div className="flex flex-col cursor-pointer shadow-lg lg:hover:shadow-lg rounded-xl p-3">
              <div className="container relative">
              <img
                src="https://b.zmtcdn.com/data/pictures/7/19285347/18adcb8c171123dd8b5350d85425ca61_o2_featured_v2.jpg"
                alt="Kake Da Hotel"
                className="rounded-xl h-60"
              />
              <div className="absolute bottom-2 bg-blue-400 text-white px-2 text-md font-semi-bold">
              <p className="">20% OFF</p>
              </div>
              <div className="absolute bottom-2 right-2 px-1 bg-gray-200 text-sm font-semi-bold rounded-md">
              <p className="">53min</p>
              </div>
            </div>
            <div className="flex justify-between">
              <h2 className="text-gray-900 font-bold">Kake Da Hotel</h2>
              <div className="bg-green-500 flex items-center px-1 text-sm mt-1 rounded-md text-gray-50">
                <p>3.9</p>
                <AiFillStar />
              </div>
            </div>
            <div className="flex justify-between text-gray-400">
              <h4 className="w-1/2 truncate">North Indian, Chinese, Biryani, Rolls, Mughlai</h4>
              <p>350 for one</p>
            </div>
          </div>
         </div>

         <div className=" w-full md:w-1/2 lg:w-1/3">
           <div className="flex flex-col cursor-pointer shadow-lg lg:hover:shadow-lg rounded-xl p-3">
             <div className="container relative">
             <img
               src="https://b.zmtcdn.com/data/pictures/chains/9/18335309/783b127c0c237353a7b987fcc1bcc63e_o2_featured_v2.jpg"
               alt="Ovenstory Pizza"
               className="rounded-xl h-60"
             />
             <div className="absolute bottom-2 bg-blue-400 text-white px-2 text-md font-semi-bold">
             <p className="">50% OFF</p>
             </div>
             <div className="absolute bottom-2 right-2 px-1 bg-gray-200 text-sm font-semi-bold rounded-md">
             <p className="">32min</p>
             </div>
           </div>
           <div className="flex justify-between">
             <h2 className="text-gray-900 font-bold">Ovenstory Pizza</h2>
             <div className="bg-green-500 flex items-center px-1 text-sm mt-1 rounded-md text-gray-50">
               <p>4.4</p>
               <AiFillStar />
             </div>
           </div>
           <div className="flex justify-between text-gray-400">
             <h4 className="w-1/2 truncate">Pizza, Desserts</h4>
             <p>350 for one</p>
           </div>
         </div>
        </div>

        <div className=" w-full md:w-1/2 lg:w-1/3">
          <div className="flex flex-col cursor-pointer shadow-lg lg:hover:shadow-lg rounded-xl p-3">
            <div className="container relative">
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/0/6505590/fe35b872037043566251f6a200a9ea1c_o2_featured_v2.jpg"
              alt="Hotel Al Zaika"
              className="rounded-xl h-60"
            />
            <div className="absolute bottom-2 bg-blue-400 text-white px-2 text-md font-semi-bold">
            <p className="">40% OFF</p>
            </div>
            <div className="absolute bottom-2 right-2 px-1 bg-gray-200 text-sm font-semi-bold rounded-md">
            <p className="">10min</p>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-gray-900 font-bold">Hotel Al Zaika</h2>
            <div className="bg-green-500 flex items-center px-1 text-sm mt-1 rounded-md text-gray-50">
              <p>3.6</p>
              <AiFillStar />
            </div>
          </div>
          <div className="flex justify-between text-gray-400">
            <h4 className="w-1/2 truncate">North Indian, Chinese, Biryani, Rolls, Mughlai</h4>
            <p>350 for one</p>
          </div>
        </div>
       </div>

       <div className=" w-full md:w-1/2 lg:w-1/3">
         <div className="flex flex-col cursor-pointer shadow-lg lg:hover:shadow-lg rounded-xl p-3">
           <div className="container relative">
           <img
             src="https://b.zmtcdn.com/data/pictures/chains/4/6503864/3030403348cd9adc57f737ee90ed1cf2_o2_featured_v2.jpg"
             alt="PK Biryani House"
             className="rounded-xl h-60"
           />
           <div className="absolute bottom-2 bg-blue-400 text-white px-2 text-md font-semi-bold">
           <p className="">40% OFF</p>
           </div>
           <div className="absolute bottom-2 right-2 px-1 bg-gray-200 text-sm font-semi-bold rounded-md">
           <p className="">34min</p>
           </div>
         </div>
         <div className="flex justify-between">
           <h2 className="text-gray-900 font-bold">PK Biryani House</h2>
           <div className="bg-green-500 flex items-center px-1 text-sm mt-1 rounded-md text-gray-50">
             <p>4.2</p>
             <AiFillStar />
           </div>
         </div>
         <div className="flex justify-between text-gray-400">
           <h4 className="w-1/2 truncate">Biryani, North Indian, Mughlai, Maharashtrian</h4>
           <p>350 for one</p>
         </div>
       </div>
      </div>

      <div className=" w-full md:w-1/2 lg:w-1/3">
        <div className="flex flex-col cursor-pointer shadow-lg lg:hover:shadow-lg rounded-xl p-3">
          <div className="container relative">
          <img
            src="https://b.zmtcdn.com/data/pictures/9/19434279/bec21ac1e3d24a47681e304e90e73891_o2_featured_v2.jpg"
            alt="BOX.72"
            className="rounded-xl h-60"
          />
          <div className="absolute bottom-2 bg-blue-400 text-white px-2 text-md font-semi-bold">
          <p className="">50% OFF</p>
          </div>
          <div className="absolute bottom-2 right-2 px-1 bg-gray-200 text-sm font-semi-bold rounded-md">
          <p className="">37min</p>
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className="text-gray-900 font-bold">BOX.72</h2>
          <div className="bg-green-500 flex items-center px-1 text-sm mt-1 rounded-md text-gray-50">
            <p>3.6</p>
            <AiFillStar />
          </div>
        </div>
        <div className="flex justify-between text-gray-400">
          <h4 className="w-1/2 truncate">Chinese</h4>
          <p>350 for one</p>
        </div>
      </div>
     </div>

     <div className=" w-full md:w-1/2 lg:w-1/3">
       <div className="flex flex-col cursor-pointer shadow-lg lg:hover:shadow-lg rounded-xl p-3">
         <div className="container relative">
         <img
           src="https://b.zmtcdn.com/data/pictures/chains/1/10571/c0ba9ec0f08684316b2552a8eb5a1ea8_o2_featured_v2.jpg"
           alt="McDonald's"
           className="rounded-xl h-60"
         />
         <div className="absolute bottom-2 bg-blue-400 text-white px-2 text-md font-semi-bold">
         <p className="">10% OFF</p>
         </div>
         <div className="absolute bottom-2 right-2 px-1 bg-gray-200 text-sm font-semi-bold rounded-md">
         <p className="">35min</p>
         </div>
       </div>
       <div className="flex justify-between">
         <h2 className="text-gray-900 font-bold">McDonald's</h2>
         <div className="bg-green-500 flex items-center px-1 text-sm mt-1 rounded-md text-gray-50">
           <p>4.2</p>
           <AiFillStar />
         </div>
       </div>
       <div className="flex justify-between text-gray-400">
         <h4 className="w-1/2 truncate">Burger, Fast Food, Beverages</h4>
         <p>350 for one</p>
       </div>
     </div>
    </div>

        </div>
      </div>
    </div>
    </>
  )
};

export default FoodCard;
