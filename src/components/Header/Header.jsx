import Styles from '../Header/Header.module.css';


export default function Header({title, backgroundImage}) {
  
    const headerStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

  return (
    <header className={`${Styles.header} page`} style={headerStyle}>
      <h1>{title}</h1>
    </header>
  );
}