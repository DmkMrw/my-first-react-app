import style from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchString, searchInputValue } from '../../redux/store';

const SearchForm = () => {


  const currentSearchString = useSelector(searchInputValue)
  const [searchValue, setSearchValue] = useState(currentSearchString);

  // console.log('currentSearchString', currentSearchString);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchValue));
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