import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Content() {
  return (
    <section className="border border-gray-500 w-full rounded-lg p-4 text-white mt-10 h-auto">
      <p className="text-xs">LeoV0/README.md</p>
      <p className="pt-5 pb-2">
        Je suis Léo, actuellement étudiant à Ada Tech School !
      </p>
      <Separator />
      <p className="pt-5">
        Passionné par le développement Front-End, je transforme les idées en
        interfaces modernes et intuitives. En quête d’une alternance pour
        approfondir mes compétences à partir du 29/09 !
      </p>
      <div className="flex justify-center pt-6 gap-10">
        {" "}
        <div className="flex items-center space-x-2 mt-2">
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://react.dev/" target="_blank">
                <Image
                  src="/icons/react.svg"
                  alt="React Icon"
                  className="cursor-pointer"
                  width={40}
                  height={40}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>React</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://nextjs.org/docs" target="_blank">
                <Image
                  src="/icons/nextjs-icon.svg"
                  alt="Next.js Icon"
                  width={40}
                  height={40}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Next JS</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://tailwindcss.com/" target="_blank">
                <Image
                  src="/icons/tailwindcss.svg"
                  alt="Tailwind CSS Icon"
                  width={40}
                  height={40}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Tailwind</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://developer.mozilla.org/fr/docs/Web/JavaScript">
                <Image
                  src="/icons/javascript.svg"
                  alt="JavaScript Icon"
                  width={40}
                  height={40}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Javascript</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Tooltip>
            <TooltipTrigger>
              <Link href="https://docs.arduino.cc/" target="_blank">
                <Image
                  src="/icons/arduino.svg"
                  alt="Arduino Icon"
                  width={40}
                  height={40}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>Arduino</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}
