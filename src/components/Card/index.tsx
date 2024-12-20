interface CardProps {
    title: string;
    year: number;
    image: string;
    type?: string;
}

const Card = ({ title, year, image, type }: CardProps) => {
    return <div className="w-96 h-auto dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center gap-3 p-4">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{year}  {type}</p>
    </div>
}

export default Card;