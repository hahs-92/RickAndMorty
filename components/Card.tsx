import Link from "next/link"
import Image from 'next/image'
import {useRouter }from 'next/router'
//styles
import styles from '../styles/components/Card.module.css'

type CardProps = {
    id: number,
    title: string,
    image: string
}

const Card: React.FC<CardProps> = ({id, title, image }) => {
    const router = useRouter()

    return(
        <article className={ styles.Card } onClick={() => router.push(`/character/${id}`)}>
            <div className={ styles.Card_container }>
                <img src={image} alt={title} />
                <h2>{title}</h2>
            </div>
        </article>
    )
}

export default Card
