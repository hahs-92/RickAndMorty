//components
import Character from "../pages/character/[id]"
import Card from "./Card"
//styles
import styles from '../styles/components/ListCharacters.module.css'

type Props = {
    characters: Characters[]
}

const ListCharacters:React.FC<Props> = ({characters}) => {
    return(
        <section className={ styles.Characters}>
            {
            characters.map(item => (
                <Card 
                    key={item.id} 
                    id={item.id} 
                    image={item.image} 
                    title={item.name}
                />
            ))
            }
        </section>
    )
}

export default ListCharacters