'use client'
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className="text-white mb-4 sm:text-5xl lg:text-6xl font-extrabold"><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm{" "}</span>
                    <br />
                    <TypeAnimation
                        sequence={[
                        
                        'Kazi Ziaur Rahman Majba',
                        1000,
                        'Web Developer',
                        1000,
                        'Front-End Developer',
                        1000,
                        
                    ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl text-justify'>
                    Hey I am a front-end developer proficient in JavaScript. Skilled in transforming design concepts into user-friendly interfaces. Collaborative team player,working closely with designers. Strong problem-solving and debugging abilities, optimizing performance for smooth user interactions. Up-to-date with latest trends and emerging technologies, continually enhancing skills to deliver innovative solutions.
                    </p>
                    <div>
                        <button className='px-5 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white w-full sm:w-fit'>Hire Me</button>
                        <button className='px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3 w-full sm:w-fit'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] relative h-[250px] w-[250px] lg:w-[400px] lg:h-[400px]'>
                        <Image 
                            src="/images/profile1.jpg" 
                            alt="Hero Image" 
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                            width={300} 
                            height={300}
                            
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
