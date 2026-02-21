import styles from './styles.module.css'
import SearchBar from '../SearchBar'

function Header() {
    return (<header className={styles.header}>
        Прекрасное кино
        <SearchBar />
    </header>);
}

export default Header;