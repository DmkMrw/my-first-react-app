import style from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { getFavoriteCard } from '../../redux/store';
import { useSelector } from 'react-redux';

const Favorite = () => {
     const favoriteCards = useSelector(getFavoriteCard);

     return (
          <>
               <PageTitle>Favorite</PageTitle>
               <article className={style.column}>
                    <ul className={style.cards}>
                         {favoriteCards.map(favoriteCard => <Card key={favoriteCard.id} title={favoriteCard.title} isFavorite={favoriteCard.isFavorite} />)}
                    </ul>
               </article>
          </>
     );
}

export default Favorite;