import { BiSearchAlt } from 'react-icons/bi';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const searchQuery = evt.target.elements.query.value;
    onSubmit({ searchQuery });
    evt.target.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.formBtn} type="submit">
          <BiSearchAlt className={css.btnIcon} />
          {/* <span>Search</span> */}
        </button>

        <input
          className={css.formInput}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
