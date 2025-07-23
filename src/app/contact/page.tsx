"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Circle } from "lucide-react";

export default function Contact() {
  const contactInfo = {
    email: "leo.cigale@gmail.com",
    github: "github.com/LeoV0",
    linkedin: "linkedin.com/in/léo-gousset",
    githubUrl: "https://github.com/LeoV0",
    linkedinUrl: "https://www.linkedin.com/in/l%C3%A9o-gousset",
  };

  const [displayedText, setDisplayedText] = useState({ github: "", linkedin: "" });
  useEffect(() => {
    const githubText = contactInfo.github;
    const linkedinText = contactInfo.linkedin;
    let githubIndex = 0;
    let linkedinIndex = 0;

    const type = () => {
      if (githubIndex < githubText.length) {
        setDisplayedText((prev) => ({
          ...prev,
          github: githubText.slice(0, githubIndex + 1),
        }));
        githubIndex++;
      } else if (linkedinIndex < linkedinText.length) {
        setDisplayedText((prev) => ({
          ...prev,
          linkedin: linkedinText.slice(0, linkedinIndex + 1),
        }));
        linkedinIndex++;
      }
    };

    const interval = setInterval(type, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center px-5 pt-24 pb-10  text-white">
      <div className="max-w-md w-full border border-gray-600 rounded-xl bg-gray-950/90">
        <div className="flex items-center space-x-2 p-3 bg-gray-800 rounded-t-xl">
          <Circle className="w-3 h-3 text-red-400" />
          <Circle className="w-3 h-3 text-yellow-400" />
          <Circle className="w-3 h-3 text-green-400" />
          <div className="flex-1"></div>
          <Image
            src="/photoProfil.jpg"
            alt="Photo de profil de Léo"
            width={32}
            height={32}
            className="rounded-full border-2 border-gray-600 group-hover:scale-110 transition-transform duration-200"
          />
        </div>
        <div className="p-6 font-mono text-sm">
          <div className="group flex items-center space-x-2 mb-4">
            <span className="text-green-400">$</span>
            <span className="text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
              git send-email {contactInfo.email}
            </span>
          </div>
          <div className="space-y-2">
            <div className="group flex items-center space-x-2">
              <span className="text-green-400">></span>
              <a
                href={contactInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 group-hover:text-blue-300 transition-colors duration-200"
              >
                {displayedText.github}
              </a>
              <span className="animate-pulse text-gray-400">|</span>
            </div>
            <div className="group flex items-center space-x-2">
              <span className="text-green-400">></span>
              <a
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 group-hover:text-blue-300 transition-colors duration-200"
              >
                {displayedText.linkedin}
              </a>
              <span className="animate-pulse text-gray-400">|</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}