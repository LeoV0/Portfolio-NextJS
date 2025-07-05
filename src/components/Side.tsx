import { Code, MapPin, Rocket, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

export default function Side() {
  return (
    <div className="flex flex-col py-10 max-w-xs mx-auto md:max-w-none md:mx-0">
      {" "}
      <div>
        <Image
          src="/photoPresentation.jpg"
          alt="Photo de profil de Léo"
          width={250}
          height={250}
          className="rounded-full object-cover border-2 border-gray-500"
        />
      </div>
      <div className="text-left">
        <h1 className="text-4xl font-bold pt-4">Léo Gousset</h1>
        <div className="flex items-center space-x-2 mt-2">
          <MapPin width={18} height={18} />
          <p className="text-gray-400 max-w-prose">Nantes, France</p>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Code width={18} height={18} />
          <p className="text-gray-400 max-w-prose">Développeur Front-End</p>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Link
            href="https://www.linkedin.com/in/l%C3%A9o-gousset/"
            target="_blank"
          >
            <div className="flex items-center space-x-2">
              <Rocket width={18} height={18} />
              <p className="text-gray-400 max-w-prose">Linkedin</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Link href="https://github.com/LeoV0" target="_blank">
            <div className="flex items-center space-x-2">
              <Rocket width={18} height={18} />
              <p className="text-gray-400 max-w-prose">Github</p>
            </div>
          </Link>
        </div>

        <Separator className="mt-4 bg-gray-400" />
        <div className="flex flex-col space-x-2 mt-2">
          <p className="pt-2">Organisations</p>
          <Image
            src="/icons/AdaTechSchool.png"
            alt="Ada Tech School"
            width={40}
            height={40}
            className="rounded-lg mt-2 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
