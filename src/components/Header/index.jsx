import styles from './Header.module.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>joaoOliveira.dev</span>
            </Link>
            
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header