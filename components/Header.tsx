//styles
import styles from '../styles/components/Header.module.css'

const Header = () => {
    return(
        <header className={ styles.Header }>
            <section className={ styles.Header_Wrapper }>
                <h1>Rick and Morty</h1>
            </section>
        </header>
    )
}

export default Header