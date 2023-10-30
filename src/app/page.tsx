"use client";
import Logo from "../components/logo/Logo";
import Background from "../components/background/Background";
import HomePageText from "../components/homepage-text/HomePageText";
import AnimatedGlobe from "../components/animated-globe/AnimatedGlobe";
import React from "react";
import Nav from "../components/elements/nav";
import Div from "../components/elements/div";
import "./globals.css";

export default function Home() {
  return (
    <Background className="container  w-full h-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
      <Div className="grid grid-cols-1 md:grid-cols-2 w-full h-4/5">
        <Div>
          <Nav className=" absolute w-full top-0 ">
            <Logo />
          </Nav>
          <Div className="text-white w-full border-none bg-transparent border-0">
            <HomePageText/>
          </Div>
        </Div>
        <Div className="h-5/6 animatedglobe">
          <Div className="h-4/5 min-h-full bg-transparent border-0 mt-12">
            <AnimatedGlobe />
          </Div>
        </Div>
      </Div>
    </Background>
  );
}
