import styles from './group-content.module.css'



const GroupContent = ({ animal }) => {


  return (
    <>
      <div className={styles.groupImageContainer}>
        <img className={styles.groupImage} src={animal.image} alt="animal-image" />
      </div>
      <div>
        <h2>{animal.name}</h2>
        <p className={styles.groupStyling}>{animal.group}</p>
        <p className={styles.descriptionStyling}>{animal.description}</p>
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