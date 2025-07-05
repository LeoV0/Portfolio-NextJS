import React from "react";

export default function CardContent() {
  const projects = [
    {
      title: "Extension Navigateur",
      description: "Une extension Pomodoro.",
      link: "https://github.com/LeoV0/Extension_navigateur_MLC",
    },
    {
      title: "Application Film",
      description:
        "Ce site utilise l'appel à une API pour récupérer des données.",
      link: "https://github.com/LeoV0/Application-Film",
    },
    {
      title: "Traducteur en Morse",
      description: "Un traducteur de morse vers texte et inversement.",
      link: "https://github.com/LeoV0/ParlezVousLeMorse",
    },
    {
      title: "Quiz JavaScript",
      description: "Un Quiz sur le thème de JavaScript.",
      link: "https://github.com/LeoV0/Quiz-javascript",
    },
  ];

  return (
    <>
      <p>Mes projets</p>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-500 rounded-lg p-4   ">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3 className="text-lg font-semibold text-blue-400 hover:underline mt-2 inline-block max-w-full">
                {project.title}
              </h3>
            </a>
            <p className="text-gray-400 text-sm mt-1">{project.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
