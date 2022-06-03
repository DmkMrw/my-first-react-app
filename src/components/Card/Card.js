import style from './Card.module.scss';
import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Card = (props) => {

     const cardId = props.cardId;
     const [favoriteValue, setFavoriteValue] = useState(props.isFavorite)

     const dispatch = useDispatch();

     const handleClick = (e) => {
          e.preventDefault();
          setFavoriteValue(!favoriteValue)
          dispatch(toggleCardFavorite(cardId));
     };

     return (
          <li className={style.card}>{props.title} <button onClick={handleClick} className={clsx(style.button, props.isFavorite && style.isActive)}><span className={'fa fa-star-o'} /></button></li>
     );
}

export default Card;