"use client";

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10 px-6">
            {/* Conteneur principal */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Section Navigation */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Navigation</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-red-500">Accueil</a></li>
                        <li><a href="/recettes" className="hover:text-red-500">Toutes les recettes</a></li>
                        <li><a href="/categories" className="hover:text-red-500">Catégories</a></li>
                        <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
                    </ul>
                </div>

                {/* Section À propos */}
                <div>
                    <h3 className="text-lg font-bold mb-4">À propos</h3>
                    <p className="text-gray-400">
                        RecetteExpress est votre plateforme idéale pour découvrir, partager, et créer des recettes inspirantes pour tous les goûts.
                    </p>
                </div>

                {/* Section Réseaux sociaux */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="text-gray-400 hover:text-blue-500">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" className="text-gray-400 hover:text-blue-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://youtube.com" className="text-gray-400 hover:text-red-500">
                            <FaYoutube size={24} />
                        </a>
                    </div>
                </div>

                {/* Section Newsletter */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                    <p className="text-gray-400 mb-4">Recevez nos meilleures recettes directement dans votre boîte mail !</p>
                    <form>
                        <input 
                            type="email" 
                            placeholder="Votre email" 
                            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 mb-2"
                        />
                        <button 
                            type="submit" 
                            className="w-full py-2 bg-red-500 hover:bg-red-400 text-white font-bold rounded"
                        >
                            S'inscrire
                        </button>
                    </form>
                </div>
            </div>

            {/* Bas de page */}
            <div className="border-t border-gray-700 mt-10 pt-4 text-center">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} RecetteExpress. Tous droits réservés.
                </p>
                <p className="text-gray-400 mt-2">
                    <a href="/mentions-legales" className="hover:text-red-500">Mentions légales</a> | 
                    <a href="/politique-confidentialite" className="hover:text-red-500"> Politique de confidentialité</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;