import './card-list.style.css';
import Card from './card'

const CardList = ({ props }) => {
    return <div className="card-list">{
        props.map((monster) => {
            return <Card key={monster.id} monster={monster}/>
        })
    }
    </div>
};

export default CardList;