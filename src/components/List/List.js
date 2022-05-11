import style from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
     return (
          <div className={style.list}>
               <header className={style.header}>
                    <h2 className={style.title}>Things to do <span>soon</span></h2>
               </header>
               <p className={style.description}>Interesting things I want to check out</p>
               <section className={style.columns}>
                    <Column title='Books' icon='book' />
                    <Column title='Movies' icon='gamepad' />
                    <Column title='Games' icon='film' />
               </section>
          </div>
     );
};

export default List;