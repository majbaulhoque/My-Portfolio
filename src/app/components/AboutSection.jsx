'use client'
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { Content } from 'next/font/google';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>Tailwind CSS</li>
        <li>JavaScript-ES6</li>
        <li>React</li>
        <li>Next.js</li>
        <li>My Sql</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Sc. in Computer Science & Engineering (CSE)</li>
        <li>Green University of Bangladesh</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>As a Intern Support Mentor in Web Development</li>
        <li>Shikhbe Shobai</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) =>{
        startTransition(() => {
            setTab(id)
        });
    };

    return (
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image 
                            src="/images/about-image.png" 
                            alt="Hero Image" 
                            width={500} 
                            height={500}
                            
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg text-justify'>Experienced frontend software developer proficient in HTML, CSS, and JavaScript, with expertise in frameworks like React. Skilled in transforming design concepts into visually appealing and user-friendly interfaces. Collaborative team player, working closely with designers and backend developers to ensure seamless integration. Strong problem-solving and debugging abilities, optimizing performance for smooth user interactions. Up-to-date with latest trends and emerging technologies, continually enhancing skills to deliver innovative solutions. Passionate about creating exceptional user experiences and driving project success. Ready to contribute expertise as a dedicated frontend software developer.</p>
                <div className="flex flex-row justify-start mt-8">
            <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("reviews")}
              active={tab === "reviews"}
            >
              {" "}
              Reviews{" "}
            </TabButton> */}
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}
          </div>
            </div>
        </div>
    );
};

export default AboutSection;