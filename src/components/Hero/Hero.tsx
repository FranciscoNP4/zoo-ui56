import './Hero.css';

interface HeroProps {
    image: string;
    badge: string;
    title: string;
    description: string;
    buttonText: string;
}

export default function Hero({ image, badge, title, description, buttonText }: HeroProps) {
    return (
        <section className="hero">
            <div className="hero__media">
                <img className="hero__img" src={image} alt={title} />
                <div className="hero__scrim" />
            </div>

            <div className="shell hero__content">
                <div className="hero__badge">{badge}</div>
                <h1 className="hero__title">{title}</h1>
                <p className="hero__text">{description}</p>
                <button className="btn btn--light" type="button">
                    {buttonText}{' '}
                    <span className="material-symbols-outlined" aria-hidden="true">
            arrow_forward
          </span>
                </button>
            </div>
        </section>
    );
}