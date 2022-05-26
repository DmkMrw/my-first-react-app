import style from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';



const Column = (props) => {

     const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));


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