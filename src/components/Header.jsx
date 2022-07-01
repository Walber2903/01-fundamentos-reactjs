import styles from './Header.module.css'
import igniteLogo from '../assets/IgniteLogo.svg'

console.log(igniteLogo)

export function Header() {
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt='Logo do ignite' />
            <strong>Ignite feed</strong>
        </header>
    )
}