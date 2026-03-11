const Steps = () => {
  const steps = [
    "Faire un puits avec la farine et y verser les oeufs",
    "Battre les oeufs et la farine et y incorporer doucement le lait",
    "Faire fondre le beurre et l'ajouter au mélange"
  ];

  return (
    <>
      <h3>Étapes</h3>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </>
  );
};

export default Steps;
