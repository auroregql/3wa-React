const Recipe = () => {
  const ingredients = ["Oeufs", "Lait", "Farine", "Beurre"];

  return (
    <article>
      <h2>La recette de la pâte à crèpes</h2>
      <h3>Ingrédients</h3>

      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </article>
  );
};

export default Recipe;



