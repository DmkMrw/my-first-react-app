import style from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';


const Column = (props) => {
     return (
          <article className={style.column}>
               <h2 className={style.title}><span className={`${style.icon} fa fa-${props.icon}`} />{props.title}</h2>
               <ul className={style.cards}>
                    {props.cards.map(card => <Card key={card.id} title={card.title}/>)}
               </ul>
               <CardForm columnId={props.id} />
          </article>
     );
};

export default Column;