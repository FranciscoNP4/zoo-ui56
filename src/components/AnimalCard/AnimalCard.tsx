import './AnimalCard.css';

export type Animal = {
    name: string;
    image: string;
    status: string;
    tone: 'tertiary' | 'error' | 'fixed';
    habitat: string;
    description: string;
};

interface AnimalCardProps {
    animal: Animal;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
    return (
        <article className="animal-card">
            <div className="animal-card__media">
                <img className="animal-card__img" src={animal.image} alt={animal.name} />
                <div className={`animal-card__status animal-card__status--${animal.tone}`}>
                    {animal.status}
                </div>
            </div>

            <div className="animal-card__body">
                <div className="animal-card__habitat-row">
                    <span className="animal-card__habitat">{animal.habitat}</span>
                </div>

                <h3 className="animal-card__title">{animal.name}</h3>
                <p className="animal-card__text">{animal.description}</p>

                <button className="btn btn--outline" type="button">
                    Saber más
                </button>
            </div>
        </article>
    );
}