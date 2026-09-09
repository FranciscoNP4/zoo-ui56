import './CardButton.css'

interface CardButtonProps {
    children?: React.ReactNode
    onClick?: () => void
}

export default function CardButton({
                                       children = 'Saber más',
                                       onClick,
                                   }: CardButtonProps) {
    return (
        <button
            className="card-button"
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    )
}