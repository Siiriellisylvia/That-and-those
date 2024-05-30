import Styles from '../Header/Header.module.css';


export default function Header({title}) {
  return (
    <header className={`${Styles.header} page`}>
      <h1>{title}</h1>
    </header>
  );
}