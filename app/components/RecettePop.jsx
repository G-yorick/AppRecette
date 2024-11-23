"use client";
import { useState } from "react";
import CarteRecette from './CarteRecette';

function PopuRecette({ searchQuery }) {
  // Données des recettes
  const recettes = [
    { imageSrc: "/recette1.jpg", nomRecette: "chocolat", tempsCuisson: 30 },
    { imageSrc: "/recette2.jpg", nomRecette: "chocolat", tempsCuisson: 30 },
    { imageSrc: "/recette3.jpg", nomRecette: "chocolat", tempsCuisson: 30 },
    { imageSrc: "/recette3.jpg", nomRecette: "Feuilles de manioc", tempsCuisson: 45 },
    { imageSrc: "/recette3.jpg", nomRecette: "Feuilles de manioc", tempsCuisson: 45 },
    { imageSrc: "/recette2.jpg", nomRecette: "Feuilles de manioc", tempsCuisson: 45 },
    { imageSrc: "/recette3.jpg", nomRecette: "Feuilles de manioc", tempsCuisson: 45 },
    { imageSrc: "/recette2.jpg", nomRecette: "Aubergines", tempsCuisson: 35 },
    { imageSrc: "/recette1.jpg", nomRecette: "Aubergines", tempsCuisson: 35 },
    { imageSrc: "/recette2.jpg", nomRecette: "Aubergines", tempsCuisson: 35 },
    { imageSrc: "/recette3.jpg", nomRecette: "Aubergines", tempsCuisson: 35 },
    { imageSrc: "/recette1.jpg", nomRecette: "Aubergines", tempsCuisson: 35 },
    { imageSrc: "/recette2.jpg", nomRecette: "Aubergines", tempsCuisson: 35 },
    { imageSrc: "/recette3.jpg", nomRecette: "Aubergines", tempsCuisson: 35 },
  ];

  // Filtrer les recettes en fonction de la recherche
  const filteredRecettes = recettes.filter((recette) =>
    recette.nomRecette.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative flex flex-col bg-gray-300">
      <h1 className="h-40 bg-gray-700 bg-opacity-70 w-full flex justify-center items-center text-3xl font-bold text-center text-white">
        Découvrez nos recettes du moment
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredRecettes.map((recette, index) => (
          <CarteRecette
            key={index}
            imageSrc={recette.imageSrc}
            nomRecette={recette.nomRecette}
            tempsCuisson={recette.tempsCuisson}
          />
        ))}
      </div>
    </section>
  );
}

export default PopuRecette;
