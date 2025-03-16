"use client";
import React from "react";
import HeroImage from "../assets/hero.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative px-8">
        {/*Brand Info*/}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
          }}
          className="flex flex-col justify-center py-14 px-4 md:pr-16 xl:pr-40 md:py-0"
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
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="w-[350px] md:w-[550px] xl:w-[700px]"
          />
        </motion.div>
      </div>
    </>
  );
}
