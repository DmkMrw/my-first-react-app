import style from './Favorite.module.scss'
import NavBar from "../NavBar/NavBar";

const Favorite = () => {
     return (
          <>
               <NavBar />
               <h2 className={style.title}>Favorite</h2>
               <p>Lorem ipsum</p>
          </>
      );
}

export default Favorite;