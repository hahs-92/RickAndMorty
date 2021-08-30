import { useState } from "react"
//components
import ItemPage from "./ItemPage"
//styles
import styles from '../styles/components/Pagination.module.css'

const INITIAL_LIST = [1,2,3,4,5,6]

const Pagination = ( ) => {
    const [ list, setList ] = useState(INITIAL_LIST)

    return(
        <section className={ styles.Pagination }>
            <ul className={ styles.Pagination_container } >
                {
                    list.map(item => (
                        <li key={item}>
                        <ItemPage index={item}/>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Pagination