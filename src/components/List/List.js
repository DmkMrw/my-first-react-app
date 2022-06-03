import style from './List.module.scss';
import { useSelector } from 'react-redux';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';
import { useParams } from 'react-router';

const List = () => {

     const { listId } = useParams();

     const listData = useSelector((state) => getListById(state, listId));
     const columns = useSelector((state) => getColumnsByList(state, listId));

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
               <ColumnForm listId={listId}/>
          </div>
     );
};

export default List;