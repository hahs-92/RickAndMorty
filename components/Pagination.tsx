import { useRouter } from "next/router"
import { useEffect, useState } from "react"
//components
import ItemPage from "./ItemPage"
//styles
import styles from '../styles/components/Pagination.module.css'

const INITIAL_LIST = [1,2,3,4]

const Pagination = ( ) => {
    const [ list, setList ] = useState(INITIAL_LIST)
    const router  = useRouter()

    const handlePages = (page?: number) => {
        (page) && router.push(`/?page=${page}`)
    }

    const IncrementList = () => {
        if (list[list.length -1 ] < 34) {
            let newArr = [...list]
            newArr.push(list[list.length - 1] + 1)
            newArr.shift()
            setList(newArr)
        }
    }

    const DecrementList = () => {
        if (list[list.length -1 ] > 1) {
            let newArr = [...list]
            newArr.unshift(list[0] - 1)
            newArr.pop()
            setList(newArr)
        }
    }

    return(
        <section className={ styles.Pagination }>
            <ul className={ styles.Pagination_container } >
                {
                    list[0] > 1 && <ItemPage title='<' cb={ DecrementList }/>
                }
                {
                    list.map(item => (
                        <ItemPage key={ item } title={ item } cb={ handlePages }/>                    
                    ))
                }
                {
                    list[list.length - 1] < 34 && <ItemPage title='>' cb={ IncrementList }/>
                }                
            </ul>
        </section>
    )
}

export default Pagination
