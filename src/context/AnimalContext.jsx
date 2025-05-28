import { createContext, useState } from "react";

export const AnimalContext = createContext();

export const AnimalProvider = ({ children }) => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const toggleAnimal = (animalName) => {
    setSelectedAnimal((prev) => (prev === animalName ? null : animalName));
  };

  return (
    <AnimalContext.Provider value={{ selectedAnimal, toggleAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
};