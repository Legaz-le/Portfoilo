import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Book from "../components/Book";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import Mushroom from "../components/Mushroom_potion";
import FroggyPie from "../components/FroggyPie";
import Cube from "../components/Cube";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
 
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery ({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen   w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl  text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Abylaikhan<span className="waving-hand">👋</span>{" "}
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 60]} />
            <HeroCamera isMobile={isMobile} >
            <Book
              position={sizes.deskPosition} 
              rotation={[-2.8, -3.2, -9.4]} 
              scale={sizes.deskScale}
            />
            </HeroCamera>
            <group>
                <Target position={sizes.targetPosition}/>
                <Mushroom position={sizes.reactLogoPosition} scale={0.005}/>
                <FroggyPie position={sizes.cubePosition} />
                <Cube position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name= "Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section>
  );
};

export default Hero;
