import { Link } from "react-router-dom";

const groupRouteMap = {
  bird: 'birds',
  reptile: 'reptiles',
  mammals: 'mammals'
};

const MainContent = ({ animal }) => {
  const groupPath = groupRouteMap[animal.group];

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
        
      </div>
    </>
  );
};

export default MainContent;