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
                    <h3>ID: {id}</h3>
                    <h3>Name: {name}</h3>
                    <h3>Status: {status}</h3>
                    <h3>Gender: {gender}</h3>
                    <h3>Origin: {origin}</h3>
                </section>
            </div>
        </article>
    )
}

export default CardCharacter