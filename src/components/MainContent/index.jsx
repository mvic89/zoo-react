import { useState } from "react";
import { Link } from "react-router-dom";

const groupRouteMap = {
  bird: 'birds',
  reptile: 'reptiles',
  mammals: 'mammals'
};

const MainContent = ({ animal }) => {
  const groupPath = groupRouteMap[animal.group];
  const [showFullDescription, setShowFullDescription] = useState(false);

  const shortedDescription = animal.description.substring(0, 200) + '...';

  return (
    <>
      <div>
        <img src={animal.image} alt="animal-image" />
      </div>
      <div>
        <h2>{animal.name}</h2>
        <h4>Food: {animal.food}</h4>
        {groupPath && (
          <Link to={`/${groupPath}`}>{animal.group}</Link>
        )}

        <div>
          <p>{showFullDescription ? animal.description : shortedDescription}</p>

          {showFullDescription && (
            <>
              <p><strong>Lifespan:</strong> {animal.lifespan}</p>
              <p><strong>Length:</strong> {animal.length}</p>
              <p><strong>Weight:</strong> {animal.weight}</p>
              <p><strong>Found:</strong> {animal.found}</p>
            </>
          )}
        </div>

        <Link
          onClick={() => setShowFullDescription((prev) => !prev)}
          style={{ cursor: 'pointer', display: 'inline-block', marginTop: '0.5rem' }}
        >
          {showFullDescription ? 'Less' : 'More'}
        </Link>
      </div>
    </>
  );
};

export default MainContent;