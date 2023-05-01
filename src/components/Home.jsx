import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import TypeWriter from "./TypeWriter";
import profile from '../images/profile.png'

const Home = () => {
  return (
      <>
    <div
      name="home"
      className="h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" lg:w-[85%] sm:w-full mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-fill lg:w-[55%] pr-4">

          <h2 className="w-full text-white pt-5 opacity-0">ok meg</h2>
          <h2 className="text-2xl sm:text-5xl font-semibold text-white pr-5 pt-5 ">
            <TypeWriter/>
          </h2>
          <p className="text-gray-500 py-4  md:text-xl">
            I have of experience building and desgining software.
            Currently, I love to work on Frontend web application using technologies like
            React,Redux Toolkit,Chara UI, Tailwind,
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="lg:max-w-[45%] ">
          <img
            src={profile}
            alt="my profile"
            className="rounded-2xl  mx-auto lg:w-[80%] md:w-full"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;



