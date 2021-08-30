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
                <Image 
                    src={ image } 
                    alt={ title } 
                    width={ 280 } 
                    height= { 280 } 
                    layout='responsive'
                    />
                <h3>{title}</h3>
            </div>
        </article>
    )
}

export default Card
