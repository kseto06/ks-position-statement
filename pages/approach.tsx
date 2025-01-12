/* eslint-disable react/no-unescaped-entities */

import '../app/globals.css' //Apply consistent style
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const Approach = () => {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] animate-fadeIn">
        <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start">
            {/* Title */}
            <div className={geistSans.className}>
                <h1 className="text-inside text-decimal text-xl sm:text-3xl font-[family-name:var(--font-geist-sans)] max-w-lg mx-auto relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-cursor after:bg-white">
                    Current Approach to Engineering
                </h1>
            </div>
            <div className={geistSans.className}>
                <h3 className="text-inside text-decimal text-xl sm:text-xl font-[family-name:var(--font-geist-sans)] max-w-xl mx-auto">
                    How do I define engineering, design, and engineering design?
                </h3>
            </div>
            {/* Text */}
            <div className={geistMono.className}>
                <p className="text-inside text-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-6xl mx-auto">
                Engineering is using technical knowledge such as math and sciences and applying them to solve real-life problems that we face everyday. 
                When applying engineering to make prototypes, we have to think about the science and math behind the prototype in order to make it effective. 
                For example, last semester in ESC101, my group's prototype to wake its user up required applications of concepts from classical mechanics and structural engineering to ensure safety when choosing a prototype. 
                <br />
                </p>
                <figure>
                    <Image
                        src="/pendulum-calc.png"
                        alt="pendulum"
                        width={180*1.9}
                        height={38}
                        className="mt-2 mx-auto" //Spacing
                    />
                    <figcaption className="text-sm text-center mt-2 my-4 text-gray-500">
                        Pendulum prototype calculations to estimate force
                    </figcaption>
                </figure>
                
                <p className="text-inside text-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-6xl mx-auto">
                Design is the general formulation of requirements to try to solve the problem, such as using DfX's to fulfill certain needs. 
                Whenever we try to design something, we always try to model goals and requirements in things such as requirement frameworks that we want the design to achieve in order to solve the problem or fulfill the actual need. 
                For example, we defined many requirements to the design prototype, ensuring things such as safety, simplicity, and size that benefit stakeholders. My team needed to be able to design every prototype for making a recommendation,
                thus requiring DfSimplicity, and we required the device to be easily implementable, thus requiring DfSimplicity and DfSize.
                </p>
                <figure>
                    <Image
                        src="/req-framework.png"
                        alt="req-framework"
                        width={180*3}
                        height={38}
                        className="mt-2 mx-auto" //Spacing
                    />
                    <figcaption className="text-sm text-center mt-2 my-4 text-gray-500">
                        Requirements framework defined for the prototype
                    </figcaption>
                </figure>

                <p className="text-inside text-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-6xl mx-auto">
                Engineering design combines both concepts in order to effectively define and technically solve the problem. 
                Both must be able to work together to come up with an effective design/prototype. 
                If we don't know what to design for, then engineering, math, and sciences is only theoretical knowledge. 
                If we don't have technical engineering knowledge, then designing knowledge can only achieve small-scale designs.
                Engineering design allows us to define design requirements, and then apply engineering and technical knowledge to be able to build something that fulfills the design, only then are we able to apply theoretical knowledge to solve problems in our world.
                </p>
                <figure>
                    <Image
                        src="/pulley-hat.png"
                        alt="pulley-hat"
                        width={180*3}
                        height={38}
                        className="mt-2 mx-auto" //Spacing
                    />
                    <figcaption className="text-sm text-center mt-2 my-4 text-gray-500">
                        Final recommended prototype 
                    </figcaption>
                </figure>

                <p className="text-inside text-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-6xl mx-auto">
                I want to engage in engineering because I want to create something that can revolutionize the world and benefit many people's lives.
                I am very passionate in software engineering and machine learning/AI and I am interested in creating a start-up to achieve my ultimate goal.
                Although I am not sure what I want to do yet, I plan to use engineering design concepts which is universally applicable to anything. 
                Identifying stakeholders, needs, and critical-thinking learned in this engineering program will be a fundamental step to my success. 
                </p>

            </div>
        </main>
      </div>
    );
  }
  
  export default Approach;
  