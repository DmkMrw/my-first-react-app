import style from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {

  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString( searchValue ));
  }

  return (
    <form className={style.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={searchValue} onChange={e => setSearchValue(e.target.value)} />
      <Button>
        <span className="fa fa-search"></span>
      </Button>
    </form>
  );
}

export default SearchForm;