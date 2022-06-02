import style from './List.module.scss';
import { useSelector } from 'react-redux';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { getAllColumns } from '../../redux/store';
import { getListById } from '../../redux/store';

const List = () => {

     const columns = useSelector(getAllColumns);
     const listData = useSelector(getListById);

     console.log('listData', listData);
     return (
          <div className={style.list}>
               <header className={style.header}>
                    <h2 className={style.title}>Things to do <span>soon</span></h2>
               </header>
               <p className={style.description}>Interesting things I want to check out</p>
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