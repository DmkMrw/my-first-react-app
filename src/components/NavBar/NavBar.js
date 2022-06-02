import style from './NavBar.module.scss';

const NavBar = () => {
     return (
          <div className={style.navBar}>
               <div className={style.container}>
                    <div className={style.iconLeft}>
                         <a href="/"><span className={`${style.icon} fa fa-tasks`} /></a>
                    </div>
                    <div className={style.navigation}>
                         <a href="/">Home</a>
                         <a href="/favorite">Favorite</a>
                         <a href="/about">About</a>
                    </div>
               </div>
     </div>
     )


}

export default NavBar;