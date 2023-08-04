import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="w-full bg-slate-900 text-white shadow-black shadow-xl sticky top-0 z-50 rounded-b-md">
      <div className="mx-auto px-4 py-5  flex justify-between items-center max-w-[1240px] space-x-24 sm:px-16">
        <Link to='/'>
          <div className="text-xl font-medium cursor-pointer ">Online Shop </div>
        </Link>



        <div className="flex justify-center items-center p-2 space-x-12 ">

          <Link to="/cart">
            <div className="text-sm text-gray-400 bg-slate-900 hover:text-white ease-in duration-100 cursor-pointer flex" >
              <span className="animate-pulse">
                <BsFillCartFill size={20} />
              </span>
              <span className="ml-2"> Cart</span>
            </div>
          </Link>

          <Link to="/signin">
            <div className="text-sm text-gray-400 hover:text-white ease-in duration-100 cursor-pointer flex" >
              <span className="">
                <AiOutlineUser size={20} />
              </span>
              <span className="ml-2"> Sign In</span>
            </div>
          </Link>


        </div>

      </div>
    </div>
  );
};

export default Navbar;
