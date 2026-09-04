import lionImg from "../../assets/majestic_male_lion_in_the_african_savannah_professional_wildlife_photography.png";
import elephantImg
    from "../../assets/african_elephant_walking_through_tall_grass_professional_wildlife_photography.png";
import pandaImg from "../../assets/giant_panda_eating_bamboo_in_a_lush_forest_professional_wildlife_photography.png";
import redPandaImg
    from "../../assets/professional_wildlife_photography_of_a_red_panda_on_a_mossy_branch_lush_green.png";
import tigerImg from "../../assets/professional_wildlife_photography_of_a_bengal_tiger_walking_through_a_jungle.png";

type Animal = {
    name: string
    image: string
    status: string
    /** Tono del badge de estado, según la paleta del sistema. */
    tone: 'tertiary' | 'error' | 'fixed'
    habitat: string
    description: string
}

interface AnimalCardProps {
    animal: Animal;
}

const HABITANTES: Animal[] = [
    {
        name: 'León',
        image: lionImg,
        status: 'Vulnerable',
        tone: 'tertiary',
        habitat: 'Savanna, Africa',
        description: 'El rey de la sabana, conocido por su majestuosa melena y su vida social en manadas. Son cazadores expertos y símbolos de fuerza.',
    },
    {
        name: 'Elefante',
        image: elephantImg,
        status: 'Endangered',
        tone: 'error',
        habitat: 'Grasslands, Africa',
        description: 'El mamífero terrestre más grande, vital para su ecosistema. Destacan por su inteligencia, memoria y fuertes lazos familiares.',
    },
    {
        name: 'Panda Gigante',
        image: pandaImg,
        status: 'Vulnerable',
        tone: 'tertiary',
        habitat: 'Temperate Forests, China',
        description: 'Amantes del bambú y un símbolo mundial de la conservación. Viven en los frondosos bosques montañosos del centro de China.',
    },
]

const DESTACADOS: Animal[] = [
    {
        name: 'Panda Rojo',
        image: redPandaImg,
        status: 'Raro',
        tone: 'fixed',
        habitat: 'Himalayas, Asia',
        description: 'Un pequeño mamífero arbóreo nativo del Himalaya.',
    },
    {
        name: 'Tigre de Bengala',
        image: tigerImg,
        status: 'Majestuoso',
        tone: 'tertiary',
        habitat: 'Jungles, India',
        description: 'El felino más grande del mundo, símbolo de fuerza y poder.',
    },
]

export default function AnimalCard({ animal }: AnimalCardProps) {

    return (<div className="animal-grid">
        {HABITANTES.map((animal) => (
            <AnimalCard animal={animal} key={animal.name} />
        ))}
    </div>)
}