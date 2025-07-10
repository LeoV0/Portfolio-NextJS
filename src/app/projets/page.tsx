"use client";
import Header from "@/components/Header";
import { useGitHubProjects } from "@/hooks/useGithubProject";
import { Code, Rocket, SquareArrowOutUpRight } from "lucide-react";
import React from "react";

export default function Projets() {
  const { projects, loading, error } = useGitHubProjects("LeoV0");

  if (loading) return <div className="text-center pt-24">Chargement...</div>;
  if (error)
    return <div className="text-center pt-24 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen githubcolor text-white mt-10">
      <Header />
      <main className="max-w-6xl mx-auto px-5 pt-24 pb-10">
        <h1 className="text-3xl font-bold mb-6">Mes Projets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-500 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                {index % 2 === 0 ? (
                  <Rocket width={24} height={24} />
                ) : (
                  <SquareArrowOutUpRight width={24} height={24} />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 hover:underline">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <p className="text-gray-500 text-xs">GitHub Repository</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-1">
                {project.description || "Pas de description disponible"}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
