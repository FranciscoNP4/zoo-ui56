import './BabyCard.css'
import CardButton from '../CardButton/CardButton'

export type Baby = {
    name: string
    image: string
    age: string
    habitat: string
    description: string
}

interface BabyCardProps {
    baby: Baby
}

export default function BabyCard({ baby }: BabyCardProps) {
    return (
        <article className="baby-card">
            <div className="baby-card__media">
                <img
                    className="baby-card__img"
                    src={baby.image}
                    alt={baby.name}
                />
            </div>

            <div className="baby-card__body">
                <span className="baby-card__age">
                    {baby.age}
                </span>

                <h3 className="baby-card__title">
                    {baby.name}
                </h3>

                <p className="baby-card__habitat">
                    {baby.habitat}
                </p>

                <p className="baby-card__text">
                    {baby.description}
                </p>

                <CardButton />
            </div>
        </article>
    )
}