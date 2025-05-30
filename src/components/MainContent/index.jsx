import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './main-content.module.css';

const groupRouteMap = {
  bird: 'birds',
  reptile: 'reptiles',
  mammals: 'mammals'
};

const MainContent = ({ animal }) => {
  const groupPath = groupRouteMap[animal.group];
  const [showFullDescription, setShowFullDescription] = useState(false);

  const shortDescription = animal.description.substring(0, 200) + '...';

  return (
    <>
      <div className={styles.animalImageContainer}>
        <img className={styles.animalImage} src={animal.image} alt="animal" />
      </div>
      <div>
        <h3>{animal.name}</h3>
        {groupPath && (
          <Link className={styles.groupStyling} to={`/${groupPath}`}>{animal.group}</Link>
        )}

        <div>
          <p>{shortDescription}</p>
        </div>

        <Link
          className={styles.readMore}
          onClick={() => setShowFullDescription(true)}
        >
          More
        </Link>
      </div>

      {showFullDescription && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setShowFullDescription(false)}
            >
              &times;
            </button>
            <h2>{animal.name}</h2>
            <img className={styles.modalImage} src={animal.image} alt="animal" />
            <p>{animal.description}</p>
            <p><strong>Food:</strong> {animal.food}</p>
            <p><strong>Lifespan:</strong> {animal.lifespan}</p>
            <p><strong>Length:</strong> {animal.length}</p>
            <p><strong>Weight:</strong> {animal.weight}</p>
            <p><strong>Found:</strong> {animal.found}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MainContent;
