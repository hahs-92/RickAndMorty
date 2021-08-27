//components
import Button from "./Button"
//styles
import styles from '../styles/components/Pagination.module.css'

const Pagination = ( ) => {

    return(
        <ul className={ styles.Pagination_container } >
            {
                [1,2,3,4,5,6,7,8,9,10].map(item => (
                    <li key={item}>
                       <Button index={item}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default Pagination