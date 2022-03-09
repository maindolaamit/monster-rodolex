import './card.style.css';

const Card = ({monster}) => {
    const imgSrc = `https://robohash.org/${monster.id}?set=set2&size=180x180`;
    return (
        <div className="card-container">
            <img alt={monster.name} src={imgSrc}></img>
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    );
}

export default Card;