"use client";

import React from "react";
import Image from "next/image";

export default function Projets() {
  const currentProject = {
    title: "Projet éducatif sur l'Egypte (En cours de création)",
    description:
      "Un projet à but éducatif autour de l'Egypte, avec des animations interactives pour engager les utilisateurs et enrichir l'expérience d'apprentissage.",
    explication:
      "L'effet visuel utilise JavaScript vanilla et la Canvas API pour créer des particules de sable formant le mot 'EGYPTE' sur une image de fond thématique. Chaque particule est une instance d'une classe Particle, avec des propriétés comme la position, la vitesse et la friction. Les particules réagissent au mouvement de la souris via des calculs de distance et d'angle, simulant une dispersion sableuse. Un canevas temporaire est utilisé pour analyser les pixels du texte, déterminant où placer les particules.",

    mediaType: "video",
    mediaUrl: "/video/AnimationEgypte.mp4",
  };

  return (
    <div className="max-w-6xl mx-auto px-5 pt-30 pb-10 text-white">
      <h1 className="text-2xl font-semibold">Projets</h1>
      <div className="border border-gray-500 rounded-lg p-6 mt-4">
        <h1>{currentProject.title}</h1>
        <div className="mt-4">
          <video
            className="w-full h-auto rounded-lg"
            controls
            src={currentProject.mediaUrl}
          />
        </div>
        <p className="text-white text-sm mt-4">{currentProject.explication}</p>
        <p className="text-gray-400 text-sm mt-4">
          {currentProject.description}
        </p>
      </div>
    </div>
  );
}
