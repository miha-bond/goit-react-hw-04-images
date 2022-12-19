import css from './Button.module.css';
const Button = ({ onClick }) => {
  return (
    <footer className={css.footer}>
      <button className={css.btnMore} type="button" onClick={onClick}>
        Load more
      </button>
    </footer>
  );
};
export default Button;
