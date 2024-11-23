import Image from "next/image";

function CarteCategory({ categories }) {
  return (
    <div className="flex flex-col ">
        <h1 className="font-bold text-3xl mt-10 h-40 bg-gray-500 items-center flex justify-center">Bienvenue dans la section catégorie</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {categories.map((categorie) => (
            <div
            key={categorie.id}
            className="bg-white shadow-md rounded-lg hover:bg-gray-100 overflow-hidden"
            >
            <Image
                src={categorie.imageSrc}
                alt={categorie.nom}
                width={400}
                height={300}
                className="object-cover w-full h-48"
            />
            <div className="p-4">
                <h3 className="text-lg font-bold">{categorie.nom}</h3>
                <p className="text-gray-600">{categorie.description}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default CarteCategory;
