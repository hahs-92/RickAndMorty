import React, { useState } from 'react'
//styles
import styles from '../styles/components/Search.module.css'
//components
import Card from './Card';
//Apollo-Graphql
import { gql } from "@apollo/client";
import { useQuery } from '@apollo/client';

const getQuery = (id: number | undefined) => (
    gql`
        query getCharacter{
            character(id: ${id}){
                id
                name
                image
            }
        }
    `
)


const Search = () => {
    const [filter, setFilter] = useState(0)
    const { loading, error, data } = useQuery(getQuery(filter))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(Number(e.target.value))
    }

    const handleSubmit = (e:  React.SyntheticEvent) => {
        e.preventDefault()
    }

    console.log(data)

    return(
        <section className={styles.Search}>
            <div className={ styles.Search_Wrapper }>
                <form className={ styles.Form } onSubmit={ handleSubmit }>
                    <label htmlFor="search">Enter a Id</label>
                    <input 
                    className={ styles.Input_Text } 
                    type="text" 
                    id='search'
                    name="search"  
                    placeholder='Enter a ID' 
                    value={filter}
                    onChange={ handleChange }
                    />
                    {/* <input className={styles.Input_Button } type="submit" value='Search' /> */}
                </form>
                <section>
                    {
                        data && 
                            <Card
                                id={data.character.id}
                                title={ data.character.name}
                                image={ data.character.image }
                            />
                    }
                </section>
            </div>
        </section>
    )
}

export default Search