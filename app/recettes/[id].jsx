import { useRouter } from "next/router";

const recettes = {
  1: {
    titre: "Chocolat",
    description: "Une recette délicieuse à base de chocolat.",
    image: "/recette1.jpg",
    tempsCuisson: 30,
    ingredients: [
      { nom: "Chocolat", quantite: "200g" },
      { nom: "Lait", quantite: "100ml" },
      { nom: "Sucre", quantite: "50g" },
    ],
    etapes: [
      "Faire fondre le chocolat au bain-marie.",
      "Ajouter le lait et mélanger.",
      "Incorporer le sucre et remuer jusqu'à homogénéité.",
    ],
  },
  2: {
    titre: "Feuilles de manioc",
    description: "Une recette traditionnelle à base de feuilles de manioc.",
    image: "/recette2.jpg",
    tempsCuisson: 45,
    ingredients: [
      { nom: "Feuilles de manioc", quantite: "500g" },
      { nom: "Arachide", quantite: "200g" },
      { nom: "Sel", quantite: "1 cuillère à café" },
    ],
    etapes: [
      "Laver les feuilles de manioc.",
      "Les cuire avec les arachides pendant 30 minutes.",
      "Assaisonner et servir chaud.",
    ],
  },
};

function RecetteDetail() {
  const router = useRouter();
  const { id } = router.query;

  const recette = recettes[id];

  if (!recette) {
    return <p>Recette non trouvée</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recette.titre}</h1>
      <p className="mb-4">{recette.description}</p>
      <img
        src={recette.image}
        alt={`Image de ${recette.titre}`}
        className="w-full mb-6 rounded-lg"
      />
      <p className="text-lg font-bold mb-2">Temps de cuisson : {recette.tempsCuisson} minutes</p>
      <h2 className="text-2xl font-semibold mb-3">Ingrédients</h2>
      <ul className="mb-4">
        {recette.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.nom} : {ingredient.quantite}
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-3">Étapes de cuisson</h2>
      <ol className="list-decimal pl-6">
        {recette.etapes.map((etape, index) => (
          <li key={index} className="mb-2">
            {etape}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default RecetteDetail;
