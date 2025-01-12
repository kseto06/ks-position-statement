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
                <h1 className="text-inside text-decimal text-xl sm:text-2xl font-[family-name:var(--font-geist-sans)] max-w-lg mx-auto">
                    Engineering Design Influenced by Experiences
                </h1>
            </div>
            {/* Text */}
            <div className={geistMono.className}>
                <p className="text-inside text-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-xs mx-auto relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-cursor after:bg-white">

                </p>
            </div>
        </main>
      </div>
    );
  }
  
  export default Experiences;
  