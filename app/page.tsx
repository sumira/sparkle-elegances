"use client";
import React from "react";
import HeroImage from "../assets/hero.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative ">
        {/*Brand Info*/}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
          }}
          className="flex flex-col justify-center py-14 px-24 md:pr-12  md:py-0"
        >
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-pink-500 text-5xl lg:text-6xl font-bold !leading-tight ">
              Sparkle Elegances{" "}
            </h1>
            <p className="text-pink-400 font-semibold text-2xl">
              100% Satisfaction Gurantee
            </p>
            <h1>Hand Crated Jewellary</h1>
            <p>
              Custom Hand Crafted Jewellary Manufactures. Reasonable Prices With
              Quality Gurantee
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button className="primary-btn">Order Now</button>
              <button className="primary-btn">Explore Image Gallery</button>
            </div>
          </div>
        </motion.div>
        {/*Product Image*/}
        <motion.div
          className="hidden md:flex justify-center items-center"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            delay: 0.5,
            duration: 0.8,
          }}
        >
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="w-full h-auto object-contain"
            style={{ maxHeight: "80vh", maxWidth: "100%" }}
          />
        </motion.div>
      </div>
    </>
  );
}
