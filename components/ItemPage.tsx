import Link from "next/link";
//styles
import styles from '../styles/components/ItemPage.module.css'

type ButtonProps = {
    index: number
}

const Button: React.FC<ButtonProps> = ({ index }) => {
    return(
        <Link href={`?page=${index}`} >
            <a className={ styles.ItemPage }>{index}</a>
        </Link>
    )
}

export default Button