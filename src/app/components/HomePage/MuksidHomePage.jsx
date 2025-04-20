"use client";
import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import GridBackground from "./GridBackground";
import StarRating from "./StarRating";
import BetaNav from "../BetaTsting/BetaNav";
import Link from "next/link";
import FlipCard from "registry/ui/animatedCards/FlipAnimatedCard";
import FeatureCard from "registry/ui/chaiThemed/featureCard";
import Reflection from "registry/ui/textAnimations/reflection";
const MuksidHomePage = () => {
  const colors = [
    "#e8953f", // amber-orange
    "#fbbf24", // amber-400
    "#f59e0b", // amber-500
    "#d97706", // amber-600
    "#b45309", // amber-700
    "#78350f", // deeper brownish chai
    "#653818",
    "#B67233",
    "#B77729",
    "#B77729",
  ];

  const [colorIndex, setColorIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % 10);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="w-screen h-screen absolute z-[-10] top-0 left-0 overflow-hidden">
        <GridBackground />
      </div>

      {/* <div className="w-screen absolute left-0 bottom-0">
        <BetaNav />
      </div> */}

      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [1, 0.9, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute hidden xl:block left-10 bottom-100 rotate-15 scale-65 hover:scale-75 ">
        <FlipCard
          front={<div className="text-2xl font-bold">Welcome to ChaiUI</div>}
          back={
            <div className="text-xl font-bold">
              Build faster with our hot chaiui components
            </div>
          }
        />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [1, 0.9, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute hidden xl:block left-40 bottom-30 rotate-15 scale-65 cursor-pointer hover:scale-75">
        <FeatureCard
          title="Chai Feature"
          description="This feature card has the warm ChaiTheme colors applied for a cozy feel."
          icon="☕"
          ChaiTheme={false}
        />
        <div className="w-60 h-60 rounded-lg absolute left-8 bottom-[-10] -z-10 bg-white"></div>
      </motion.div>
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [1, 0.9, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute hidden xl:block right-10 bottom-0 -rotate-20 scale-65 cursor-pointer ">
        <Reflection
          text="ChaiUI"
          fontSize="8xl"
          textColor="gray-400"
          reflectionOpacity={30}
        />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [1, 0.9, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute right-5 bottom-5 xl:right-30 xl:bottom-40 -rotate-20 scale-65 cursor-pointer ">
        <span className=" text-8xl font-black dark:text-chai-dark drop-shadow-[3px_3px_1px_#b07a42]">
          UI{" "}
          <motion.div
            animate={{ y: ["100%", "-100%"] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeOut",
            }}
            className="  absolute top-[-20] right-2 w-[20px] h-[20px] rounded-full
                  bg-[linear-gradient(360deg,_rgba(254,115,1,1),_rgba(255,255,255,1))]
                  dark:bg-[linear-gradient(360deg,_rgba(141,64,2,1),_rgba(255,255,255,1))]
                  "></motion.div>
        </span>
      </motion.div>

      {/* right side of the code  */}
      <div className="flex flex-col justify-center items-center m-3">
        <h1 className=" text-4xl sm:text-6xl xl:text-7xl  font-bold dark:text-white text-gray-950 leading-tight">
          Build Faster With
          <br />
          <span className="dark:text-white text-gray-950">
            Our{" "}
            <motion.span
              className="font-bold"
              animate={{ color: colors[colorIndex] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}>
              ChaiUI Component's
            </motion.span>
          </span>
        </h1>
        <p className="text-gray-400 mt-4 text-md max-w-xl ">
          A next-gen component library designed to empower developers to create
          beautiful, accessible, and high-performance web experiences —
          effortlessly
        </p>

        <div className="mt-6 flex flex-col xl:flex-row flex-wrap gap-4 ">
          {/* Explore Components button */}
          <Link href="/docs">
            <button className="bg-[#e8953f] hover:bg-[#d17e28] cursor-pointer text-white px-4 xl:px-6 py-3 text-lg rounded-full">
              Explore Components
            </button>
          </Link>

          {/* GitHub button with icon */}
          <Link
            href="https://github.com/Muksiduz/ui.chaiui"
            className="cursor-pointer flex items-center justify-center gap-2 bg-[#1c3752] hover:bg-[#163048] text-white px-4 xl:px-6 py-3 text-lg rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="20"
              height="20">
              <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.84 10.94c.57.1.78-.25.78-.56v-2.17c-3.18.69-3.85-1.53-3.85-1.53-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.95.1-.74.4-1.25.73-1.54-2.54-.29-5.22-1.27-5.22-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .97-.31 3.18 1.17a11.02 11.02 0 0 1 5.8 0c2.21-1.48 3.18-1.17 3.18-1.17.62 1.58.23 2.74.12 3.03.74.8 1.18 1.82 1.18 3.07 0 4.4-2.68 5.37-5.23 5.65.41.35.77 1.04.77 2.1v3.11c0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
            </svg>
            GitHub
          </Link>
        </div>
        <div className="mt-10">
          <StarRating />
        </div>
      </div>
      {/* Right: Text and Buttons */}
    </div>
  );
};

export default MuksidHomePage;
