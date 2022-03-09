import './card-list.style.css';

const CardList = ({ children }) => {
    console.log('CardList : ' + children);
    return <div className="card-list">{
        children.map((monster) => {
            return <li key={monster.id}>{monster.name}</li>
        })
    }
    </div>
};

export default CardList;