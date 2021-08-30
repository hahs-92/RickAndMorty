//styles
import styles from '../styles/components/ItemPage.module.css'

type ButtonProps = {
    title: number | string,
    cb: (page?:number) => void 
}

const Button: React.FC<ButtonProps> = ({title, cb }) => {

    const handleChange = () => {
       (typeof(title) === 'number') && cb(title)
       cb()
    }

    return(
        <li className={ styles.ItemPage } onClick={handleChange }>{title}</li>
    )
}

export default Button