import React from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import {useState} from "react";
const About = () => {
    const[baseCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("abylaikhanzhumakov@gmail.com");

        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Abylaikhan</p>
              <p className="grid-subtext">
                With 1.5 year of experience, I have honed my skills in frontend
                and backend development.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sapn-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/React.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with focun on React,Vue.js
                and Next.js ecosystem{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div >
                <p className="grid-headtext">I work remotely across most timezones.</p>
                <p className="grid-subtext">I'm based in Japan, with remote work available. </p>
                <a href="#contact"><Button name="Contact me" isBeam containerClass="w-full mt-10"/></a>
            </div>
          </div>
        </div>
        <div className= "xl:col-span-2 xl:row-span-3">
            <div className="grid-container">
                <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                <div>
                    <p className="grid-headtext">My passion for Coding</p>
                    <p className="grid-subtext">I love solving problems and building things through code. Coding isn't just my profession - it is my passion</p>
                </div>
            </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container">
                <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                <div className="space-y-2">
                    <p className="grid-subtext text-center">Contact me</p>
                    <div className="copy-container" onClick={handleCopy}>
                        <img src={baseCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                        <p className="lg:text-1xl md:text-xl font-medium text-gray_gradient text-white">abylaikhanzhumakov@gmail.com</p>
                    </div>                    
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
