import './DateCard.css'

interface DateCardProps {
    date: string
    title: string
    description: string
}

export default function DateCard({
                                     date,
                                     title,
                                     description,
                                 }: DateCardProps) {
    return (
        <article className="date-card">
            <div className="date-card__date">
                {date}
            </div>

            <div className="date-card__content">
                <h3 className="date-card__title">
                    {title}
                </h3>

                <p className="date-card__description">
                    {description}
                </p>
            </div>
        </article>
    )
}