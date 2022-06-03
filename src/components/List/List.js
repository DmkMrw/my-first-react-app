import style from './List.module.scss';
import { useSelector } from 'react-redux';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';

const List = () => {

     const listData = useSelector((state) => getListById(state, 1));
     const columns = useSelector((state) => getColumnsByList(state, 1));
     console.log('listData', columns);
     return (
          <div className={style.list}>
               <header className={style.header}>
                    <h2 className={style.title}>{listData.title}</h2>
               </header>
               <p className={style.description}>{listData.description}</p>
               <section className={style.columns}>
                    {columns.map(column =>
                    <Column
                         key={column.id}
                         {...column}  />
                    )}
               </section>
               <ColumnForm />
          </div>
     );
};

export default List;