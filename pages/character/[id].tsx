import { useRouter } from 'next/router';
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths  } from 'next'
//Apollo-Graphql
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import React from 'react';
//components
import Header from '../../components/Header'
import CardCharacter from '../../components/CardCharacter';
//styles
import styles from '../../styles/Character.module.css'

const Character = ( {character}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()

    const handleClick = () => {
        router.back()
    }

    return(
        <section className={ styles.Wrapper }>
            <CardCharacter 
                id={character.id}
                name={ character.name}
                gender={ character.gender}
                status={ character.status}
                origin={ character.origin.name}
                image={ character.image}
            />
           
            <div className={ styles.ButtonWrapper }>
                <button onClick={handleClick}>Back</button>
            </div>
        </section>
    )
}


export const getStaticProps: GetStaticProps<CharacterIdProps> = async({params}) => {
    const id = params?.id
    try {
        const {data } = await client.query({
            query: gql`
                query getCharacter{
                    character(id: ${id}){
                        id
                        name
                        status
                        gender
                        origin {
                            name
                        }
                        image
                    }
                }
            `
        })
        return {
            props:{ character: data.character },
            revalidate: 15 * 60, // once every fifteen minutes
        }
        
    } catch (error) {
        return { notFound: true }
    }
}

export const getStaticPaths: GetStaticPaths = async() => {
    const { data } = await client.query({
        query: gql `
            query getCharacters {
            characters(page:${1}) {
                results{
                id
                }
            }
            }
        `
    })

    const paths = data.characters.results.map((item: any )=> ({
        params: {
            id: item.id
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export default Character