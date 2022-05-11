import style from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';

const SearchForm = () => {
  return (
    <form className={style.searchForm}>
      <TextInput placeholder="Search..."/>
      <button className={style.button}>Search</button>
    </form>
  );
}

export default SearchForm;