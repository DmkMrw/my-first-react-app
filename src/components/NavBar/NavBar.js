import style from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
     return (
          <div className={style.navBar}>
               <div className={style.container}>
                    <div className={style.iconLeft}>
                         <a href="/"><span className={`${style.icon} fa fa-tasks`} /></a>
                    </div>
                    <div className={style.navigation}>
                         <ul className={style.ulNav}>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/favorite">Favorite</Link></li>
                              <li><Link to="/about">About</Link></li>
                         </ul>
                    </div>
               </div>
     </div>
     )


}

export default NavBar;