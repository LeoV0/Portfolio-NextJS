import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Content() {
  return (
    <section className="border border-gray-500 w-full rounded-lg p-4 text-white mt-10">
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
        {/* Remplacé pt-15 par pt-6 */}
        <div className="flex items-center space-x-2 mt-2">
          <Image
            src="/icons/react.svg"
            alt="React Icon"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Image
            src="/icons/nextjs-icon.svg"
            alt="Next.js Icon"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Image
            src="/icons/tailwindcss.svg"
            alt="Tailwind CSS Icon"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Image
            src="/icons/javascript.svg"
            alt="JavaScript Icon"
            width={40}
            height={40}
          />
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Image
            src="/icons/arduino.svg"
            alt="Arduino Icon"
            width={40}
            height={40}
          />
        </div>
      </div>
    </section>
  );
}
