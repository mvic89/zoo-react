const GroupContent = ({ animal }) => {
  return (
    <>
    <div>
      <h2>{animal.name}</h2>
      <img src={animal.image} alt="animal-image" />
      <p>{animal.description}</p>
      <ul>
        <li><strong>Lifespan:</strong> {animal.lifespan}</li>
        <li><strong>Food:</strong> {animal.food}</li>
        <li><strong>Length:</strong> {animal.length}</li>
        <li><strong>Weight:</strong> {animal.weight}</li>
        <li><strong>Found:</strong> {animal.found}</li>
      </ul>
    </div>
    <div>
      
    </div>
    </>
  );
};

export default GroupContent;