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

const Experiences = () => {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] animate-fadeIn">
        <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start">
            {/* Title */}
            <div className={geistSans.className}>
                <h1 
                    className="text-inside text-decimal text-xl sm:text-2xl font-[family-name:var(--font-geist-sans)] max-w-lg mx-auto">
                    Engineering Design Influenced by Experiences
                </h1>
            </div>

            <div className={geistSans.className}>
                <h3 
                    className="text-inside text-decimal text-lg sm:text-lg font-[family-name:var(--font-geist-sans)] mx-auto relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:animation-delay-[2s] before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-cursor after:bg-white">
                    I am a specialist in robotics, software, and AI/Machine Learning engineering.
                </h3>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: "center", alignItems: 'center'}}>
                <figure style={{ textAlign: 'center' }}>
                    <img src="robotics.png" style={{ width: '700px', height: 'auto' }} />
                    <figcaption className={geistSans.className}>Representing and competing on the field for my Robotics team, Dec. 2022</figcaption>
                </figure>
                <figure style={{ textAlign: 'center' }}> 
                    <img src="github.png" style={{ width: '500px', height: 'auto' }} /> 
                    <figcaption className={geistSans.className}>Software development project portfolio</figcaption>
                </figure>
            </div>

            {/* Text */}
            <div className={geistMono.className}>
                <p className="text-inside text-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    My many engineering extracurricular experiences includes Robotics team programming lead, software developer positions, 
                    and most recently a reinforcement learning lead developer in UofT’s Machine Intelligence Student Team. My continuous passion for exploring these 
                    fields have heavily influenced by perspective on how I approach engineering.
                    <br />
                    <br />
                    In my engineering experiences, I always have to tackle high-stake problems. In my Robotics team, I led developers and created complex programs
                    with the hope of being able to qualify for the FIRST Tech Challenge Robotics World Championships in Houston. Currently, I am leading 
                    UTMIST's prime reinforcement learning project to develop a tournament/hackathon for over 250 participants/stakeholders. I interpret engineering design 
                    as a powerful tool where the concepts learned can be applied to show a vision of what I want to create, and how to layout and combine the pieces to get to an ultimate goal. 
                    For example, being UTMIST's lead developer, I am constantly applying NGO frameworks to keep my team on the scope of the project and FDCR to brainstorm and implement ideas in code.
                    <br />
                    <br />
                    Since I am constantly tackling large problems that involve many stakeholders, I engage in engineering design always trying to think ahead of what I want my end goal to be to try to maximize efficiency. 
                    I am constantly diverging and converging of what I want to design and produce for a project, even at the framing stage when I am only finding an opportunity; this allows me to think of an ultimate goal 
                    that I want to achieve and it provides me with better motivation to tackle and finish a project. For example, in my community pitch I identify cyclists in downtown Toronto who are at risk of injuries
                    due to reckless driving. When I was ideating and framing this opportunity, I was already diverging ideas and designs in areas that I am interested in, such as designing computer vision systems to improve
                    the safety of the bikers. 
                </p>
            </div>
        </main>
      </div>
    );
  }
  
  export default Experiences;
  