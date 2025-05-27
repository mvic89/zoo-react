import { useParams } from "react-router-dom"
import animals from "../../animalsdata"

const MainContent = () => {
    const { animalName } = useParams()

    const animal = animals.find(
        (item) => item.name.toLowerCase().replace(/\s+/g, '-') === animalName
    )

    if (!animal) return <p>Animal not found.</p>

    return (
        <div>
            <h2>{animal.name}</h2>
            <p><strong>Group:</strong> {animal.group}</p>
            <p><strong>Lifespan:</strong> {animal.lifespan}</p>
            <p><strong>Food:</strong> {animal.food}</p>
            <p><strong>Length:</strong> {animal.length}</p>
            <p><strong>Weight:</strong> {animal.weight}</p>
            <p><strong>Found:</strong> {animal.found}</p>
            <p><strong>Description:</strong></p>
            <p>{animal.description}</p>
        </div>
    )
}

export default MainContent