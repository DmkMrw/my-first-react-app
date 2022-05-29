import style from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';




const Column = (props) => {

     const cards = useSelector(state => getFilteredCards(state, props.id));


     return (
          <article className={style.column}>
               <h2 className={style.title}><span className={`${style.icon} fa fa-${props.icon}`} />{props.title}</h2>
               <ul className={style.cards}>
                    {cards.map(card => <Card key={card.id} title={card.title}/>)}
               </ul>
               <CardForm columnId={props.id}/>
          </article>
     );
};

export default Column;