import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header.tsx'
import Hero from './components/Hero/Hero.tsx'
import AnimalCard, {type Animal } from './components/AnimalCard/AnimalCard.tsx'

import toucanImg from './assets/colorful_toco_toucan_on_a_tropical_branch_vibrant_feathers_professional.png'
import lionImg from './assets/majestic_male_lion_in_the_african_savannah_professional_wildlife_photography.png'
import elephantImg from './assets/african_elephant_walking_through_tall_grass_professional_wildlife_photography.png'
import pandaImg from './assets/giant_panda_eating_bamboo_in_a_lush_forest_professional_wildlife_photography.png'
import redPandaImg from './assets/professional_wildlife_photography_of_a_red_panda_on_a_mossy_branch_lush_green.png'
import tigerImg from './assets/professional_wildlife_photography_of_a_bengal_tiger_walking_through_a_jungle.png'

type Ticket = {
  id: string
  title: string
  meta: string
  price: string
}

const NAV_LINKS = ['Animals', 'Conservation', 'Visit', 'About']

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

const TICKETS: Ticket[] = [
  { id: 'general', title: 'Entrada General', meta: 'Adultos 13+', price: '$25' },
  { id: 'kids', title: 'Entrada Niños', meta: '3-12 años', price: '$15' },
  { id: 'senior', title: 'Entrada Senior', meta: '65+', price: '$18' },
]

const QUANTITIES = ['0', '1', '2', '3', '4']

const FOOTER_GROUPS = [
  { heading: 'Connect', links: ['Facebook', 'Instagram', 'LinkedIn'] },
  { heading: 'Info', links: ['Contact Us', 'Newsletter', 'Privacy Policy'] },
]

function App() {
  const [quantities, setQuantities] = useState<Record<string, string>>({ general: '0', kids: '0', senior: '0' })
  const [visitDate, setVisitDate] = useState('')

  return (
      <>
        <Header navLinks={NAV_LINKS} />

        <main className="main">
          <Hero
              image={toucanImg}
              badge="Animal del Mes"
              title="Toco Toucan"
              description="Conocido por su pico enorme y colorido, el Tucán Toco es un habitante vibrante de las selvas sudamericanas. Descubre su dieta y su importante rol en la dispersión de semillas."
              buttonText="Conocer más"
          />

          <section className="shell section">
            <div className="section__head">
              <h2 className="section__title">Nuestros Habitantes</h2>
              <p className="section__text">Explora la diversidad de especies que cuidamos en WildEco. Cada animal tiene una historia y un hábitat único.</p>
            </div>

            <div className="animal-grid">
              {HABITANTES.map((animal) => (
                  <AnimalCard animal={animal} key={animal.name} />
              ))}
            </div>
          </section>
        </main>

        <section className="shell section">
          <div className="section__head">
            <h2 className="section__title">Animales Destacados</h2>
            <p className="section__text">Conoce a algunas de nuestras especies más emblemáticas y raras que habitan en nuestro santuario.</p>
          </div>

          <div className="animal-grid">
            {DESTACADOS.map((animal) => (
                <AnimalCard animal={animal} key={animal.name} />
            ))}
          </div>
        </section>

        <section className="section section--tinted">
          <div className="shell">
            <div className="section__head">
              <h2 className="section__title">Planifica tu Visita</h2>
              <p className="section__text">Reserva tus entradas con antelación y asegura tu lugar en esta aventura natural.</p>
            </div>

            <div className="visit__grid">
              <div className="visit__tickets">
                {TICKETS.map((ticket) => (
                    <div className="ticket" key={ticket.id}>
                      <h3 className="ticket__title">{ticket.title}</h3>
                      <p className="ticket__meta">{ticket.meta}</p>

                      <div className="ticket__row">
                        <span className="ticket__price">{ticket.price}</span>
                        <select
                            className="ticket__select"
                            value={quantities[ticket.id]}
                            aria-label={`Cantidad — ${ticket.title}`}
                            onChange={(event) => setQuantities((current) => ({ ...current, [ticket.id]: event.target.value }))}
                        >
                          {QUANTITIES.map((quantity) => (
                              <option value={quantity} key={quantity}>{quantity}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                ))}
              </div>

              <div className="booking">
                <div>
                  <label className="booking__label" htmlFor="visit-date">Fecha de Visita</label>
                  <input
                      className="booking__input"
                      id="visit-date"
                      type="date"
                      value={visitDate}
                      onChange={(event) => setVisitDate(event.target.value)}
                  />
                </div>

                <button className="btn btn--block" type="button">Reservar Ahora</button>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="shell footer__inner">
            <div className="footer__brand-col">
              <a className="footer__brand" href="#">WildEco Zoo</a>
              <p className="footer__copy">© 2024 WildEco Conservation Zoo. Protecting habitats for generations.</p>
            </div>

            <div className="footer__groups">
              {FOOTER_GROUPS.map((group) => (
                  <div className="footer__group" key={group.heading}>
                    <h4 className="footer__heading">{group.heading}</h4>
                    {group.links.map((link) => (
                        <a className="footer__link" href="#" key={link}>{link}</a>
                    ))}
                  </div>
              ))}
            </div>
          </div>
        </footer>
      </>
  )
}

export default App