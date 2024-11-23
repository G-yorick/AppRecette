"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./bouton";

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="w-full bg-gray-800 px-6 text-white flex flex-wrap items-center justify-between h-auto md:h-40">
      {/* Logo et Titre */}
      <div className="flex items-center gap-4 mb-4 md:mb-0">
        <Image
          className="rounded-lg"
          src="/logo.jpg"
          alt="Logo RecetteExpress"
          width={60}
          height={60}
        />
        <h1 className="text-xl md:text-3xl font-bold">RecetteExpress</h1>
      </div>

      {/* Navigation */}
      <ul className="flex flex-wrap border-2 gap-4 text-sm md:text-xl rounded-lg md:px-4 md:py-2 font-semibold">
        <li className="hover:scale-105 transition-transform ease-in-out hover:shadow">
          <Link href="/">Accueil</Link>
        </li>
        <li className="hover:scale-105 transition-transform ease-in-out hover:shadow">
          <Link href="/recettes">Recettes</Link>
        </li>
      </ul>

      {/* Barre de recherche */}
      <div className="w-full md:w-auto flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full md:w-58 h-12 px-4 text-black rounded-lg"
        />
        <Button
          value="Connexion"
          className="py-2 px-4 text-sm md:text-md md:py-3 md:px-6"
        />
      </div>
    </nav>
  );
}

export default Header;
