const MainContent = ({ animal }) => {
  return (
    <div>
      <h2>{animal.name}</h2>
      <p><strong>Lifespan:</strong> {animal.lifespan}</p>
      <p><strong>Group:</strong> {animal.group}</p>
      <p><strong>Food:</strong> {animal.food}</p>
      <p><strong>Description:</strong> {animal.description}</p>
      <p><strong>Length:</strong> {animal.length}</p>
      <p><strong>Weight:</strong> {animal.weight}</p>
      <p><strong>Found in:</strong> {animal.found}</p>
    </div>
  );
};

export default MainContent;