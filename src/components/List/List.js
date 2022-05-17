import style from './List.module.scss';
import Column from '../Column/Column';
import { useState } from 'react';
import { useEffect } from 'react';
import shortid from 'shortid';

const List = () => {
     const [columns, setColumns] = useState([
          { id: 1, title: 'Books', icon: 'book' },
          { id: 2, title: 'Movies', icon: 'film' },
          { id: 3, title: 'Games', icon: 'gamepad' }
     ]);
     const [value, setValue] = useState('');

     const handleSubmit = e => {
	e.preventDefault();
	setColumns([...columns, { id: shortid(), title: value }]);
     setValue('')
     };
     return (
          <div className={style.list}>
               <header className={style.header}>
                    <h2 className={style.title}>Things to do <span>soon</span></h2>
               </header>
               <p className={style.description}>Interesting things I want to check out</p>
               <section className={style.columns}>
                    {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} />)}
               </section>
               <form onSubmit={handleSubmit}>
                    <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                    <button>Add column</button>
               </form>
          </div>
     );
};

export default List;