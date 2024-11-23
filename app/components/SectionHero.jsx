import Image from "next/image";
import Button from './bouton';

function HeroSection() {
    return (
        <section
            className="relative bg-[url('/bg-hero.jpg')] bg-cover bg-center h-screen text-white"
        >
            <div className="absolute inset-0 bg-black/50"></div> {/* Overlay pour le texte */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h1 className="font-bold text-4xl mb-8 text-center">
                    Des milliers de recettes, Juste pour vous !
                </h1>
                <div className="flex gap-4">
                    <Button value="Explorer les recettes" />
                    <Button value="Ajouter votre recette" />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
