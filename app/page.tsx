"use client";
import { useState } from "react"; // Import de useState
import Header from './components/Header';
import HeroSection from './components/SectionHero';
import PopuRecette from './components/RecettePop';
import Footer from './components/Footer';
import Categorie from "./components/CarteCategory";
import { categoriesData } from "./data";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState(""); // Ajout de l'état pour la recherche

  // Fonction pour mettre à jour la recherche
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header onSearch={handleSearch} /> {/* Transmission de handleSearch à Header */}
      <HeroSection />
      <PopuRecette searchQuery={searchQuery} /> {/* Transmission de searchQuery à PopuRecette */}
      <Categorie categories={categoriesData} />
      <Footer />
    </>
  );
}
