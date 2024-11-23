import Image from "next/image";
import Link from "next/link";

function CarteRecette({ id, imageSrc, nomRecette, tempsCuisson }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
      <Link href={`/recettes/${id}`}>
        <Image
          src={imageSrc}
          alt={`Recette de ${nomRecette}`}
          width={200}
          height={200}
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <h2 className="text-lg font-bold mt-4">{nomRecette}</h2>
      <p className="text-gray-600">{tempsCuisson} minutes</p>
    </div>
  );
}

export default CarteRecette;
