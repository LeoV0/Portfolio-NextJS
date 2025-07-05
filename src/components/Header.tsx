import { Album, BookOpen, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const currentPath =
    typeof window !== "undefined" ? window.location.hash : "#overview";

  return (
    <header className="fixed top-0 left-0 w-full githubHeader shadow-md z-50 text-white border-b border-gray-500">
      <div className="max-w-6xl px-5">
        <div className="h-14 flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/photoProfil.jpg"
              alt="Photo de profil"
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
          <p className="font-semibold">LeoV0</p>
        </div>

        <div className="flex space-x-4 py-2 ">
          <Link
            href="/"
            className={`hover:bg-gray-400/20 px-2 py-1 rounded flex items-center space-x-2 hover:cursor-pointer`}
          >
            <BookOpen width={20} height={20} />
            <span>A propos</span>
          </Link>
          <Link
            href="/projets"
            className={`hover:bg-gray-400/20 px-2 py-1 rounded flex items-center space-x-2 hover:cursor-pointer`}
          >
            <Album width={20} height={20} />
            <span>Projets</span>
          </Link>
          <Link
            href="/contact"
            className={`hover:bg-gray-400/20 px-2 py-1 rounded flex items-center space-x-2 hover:cursor-pointer`}
          >
            <MessageCircle width={20} height={20} />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
