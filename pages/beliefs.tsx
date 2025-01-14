/* eslint-disable react/no-unescaped-entities */

import '../app/globals.css' //Apply consistent style
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const Beliefs = () => {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] animate-fadeIn">
        <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start">
            {/* Title */}
            <div className={geistSans.className}>
                <h1 className="text-inside text-decimal text-xl sm:text-2xl font-[family-name:var(--font-geist-sans)] max-w-lg mx-auto relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:animation-delay-[2s] before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-cursor after:bg-white">
                    Beliefs and Values in Engineering Design
                </h1>
            </div>
            {/* Text */}
            <div className={geistSans.className}>
                <h3 className="text-inside text-decimal text-xl sm:text-xl font-[family-name:var(--font-geist-sans)] max-w-xl mx-auto">
                    Beliefs
                </h3>
            </div>
            {/* Text */}
            <div className={geistMono.className}>
                <p className="text-inside text-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-6xl mx-auto">
                One of my prime beliefs in engineering design is that <b><u>failure is part of the learning process</u></b>. Throughout the engineering process, it is inevitable that engineers will hit obstacles,
                and it can sometimes feel like there is no recovery from it. As a passionate software engineer, I can't count the amount of hours I have spent debugging or completely rescoping and redoing projects
                due to mistakes in my complex software projects or trying to attempt projects that are completely out of my skillsets and infeasible.
                However, an important lesson that I have learned through my experiences as a student engineer is that persevering after every mistake can only open up more opportunities in the future.
                In every one of these opportuntities, there will eventually be a solution. In the end, the resulting solution could even be better than what was originally scoped/planned. 
                For example, my large-scale game development focused project on Mortal Kombat was a very rigourous task as I had to code animations for each character. Through rescoping and deciding to 
                design a simpler animation, it made it much easier to develop while still maintaining the essence of what I was trying to originally develop. 
                <br />
                <br />
                In addition, I believe that <b><u>collaboration allows for better outcomes and opportunities</u></b>. In engineering, the problems that engineers aim to solve are extremely complex,
                and it is impossible for only one person to be able to find solutions and achieve results to large-scale problems. Collaboration opens up opportunities from different backgrounds and experiences
                that can bring perspectives that benefit the task at hand, and teammates can learn from each other and inspire each other to do better. 
                For example, as my high school's Robotics team programming lead, there were many times where I failed to find a method to best optimize robot movement.
                It was only through collaborating with talented teammates where I was able to learn and find a solution.
                </p>
            </div>

            <div className={geistSans.className}>
                <h3 className="text-inside text-decimal text-xl sm:text-xl font-[family-name:var(--font-geist-sans)] max-w-xl mx-auto">
                    Values
                </h3>
            </div>
            <div className={geistMono.className}>
                <p className="text-inside text-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-6xl mx-auto">
                My main principle and value in engineering is upholding <b><u>quality</u></b> in every design that we create. 
                My engineering philosophy is that engineers must uphold the highest of standards and practice the best quality that is achievable when solving problems, as engineers 
                are the ones that revolutionize the world. As such, engineers cannot afford to produce bad quality designs. If structural engineers designed a bridge that many stakeholder drivers need to use,
                then they must uphold quality and standards to ensure the safety of everyone who uses this bridge. 
                <br />
                <br />
                I also believe that <b><u>integrity</u></b> should be upheld when working with fellow collaborators and in the designs that we make.
                I am passionate in AI/ML engineering and I am also concerned about the malicious uses of AI such as things in deepfakes that could generate false and harmful content.
                As an aspiring AI engineer, I seek to practice trustworthy/ethical AI in my work and develop designs that solely benefit people without the risk of harm.                </p>
            </div>
        </main>
      </div>
    );
  }
  
  export default Beliefs;
  