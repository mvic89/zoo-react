import { Link } from "react-router-dom";



const GroupContent = ({ animal }) => {


  return (
    <>
      <div>
        <img src={animal.image} alt="animal-image" />
      </div>
      <div>
        <h2>{animal.name}</h2>
        <p>{animal.group}</p>
        <p>{animal.description}</p>
        <p><strong>Lifespan: </strong>{animal.lifespan}</p>
        <p><strong>Food: </strong>{animal.food}</p>
        <p><strong>Length: </strong>{animal.length}</p>
        <p><strong>Weight: </strong>{animal.weight}</p>
        <p><strong>Found: </strong>{animal.found}</p>
      </div>
    </>
  );
};

export default GroupContent;