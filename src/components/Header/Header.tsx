import './Header.css';

interface HeaderProps {
    navLinks: string[];
}

export default function Header({ navLinks }: HeaderProps) {
    return (
        <header className="header">
            <div className="shell header__inner">
                <div>
                    <a className="header__brand" href="#">WildEco Zoo</a>
                </div>

                <nav className="header__nav">
                    {navLinks.map((link, index) => (
                        <a
                            key={link}
                            className={`nav__link${index === 0 ? ' nav__link--active' : ''}`}
                            href="#"
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                <div className="header__actions">
                    <button className="header__search" type="button" aria-label="Search">
            <span className="material-symbols-outlined" aria-hidden="true">
              search
            </span>
                    </button>
                    <button className="btn btn--filled" type="button">Tickets</button>
                </div>
            </div>
        </header>
    );
}