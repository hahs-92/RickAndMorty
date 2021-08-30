//styles
import styles from '../styles/components/CardCharacter.module.css'

type CardCharacterProps = {
    id: number,
    name: string,
    status: string,
    gender: string,
    origin: string
    image: string
}

const CardCharacter: React.FC<CardCharacterProps> = ({id,name,status,gender,origin,image}) => {
    return(
        <article className={ styles.CharacterCard }>
            <div className={ styles.CharacterCard_Wrapper }>
                <section className={ styles.ImageWrapper }>
                    <img src={image} alt={name} />
                </section>
                <section className={ styles.ContentWrapper }>
                    <h3>ID: <span> {id}</span></h3>
                    <h3>Name: <span>{name}</span></h3>
                    <h3>Status: <span>{status}</span></h3>
                    <h3>Gender: <span>{gender}</span></h3>
                    <h3>Origin: <span>{origin}</span></h3>
                </section>
            </div>
        </article>
    )
}

export default CardCharacter