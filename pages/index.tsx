import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
//components
import Search from '../components/Search'
import ListCharacters from '../components/ListCharacters'
import Pagination from '../components/Pagination'
//Apollo-Graphql
import { gql } from "@apollo/client";
import client from "../apollo-client";


const Home = ({ characters}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.container}>
      <Search />
      <ListCharacters characters={ characters }/>
      <Pagination />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({query}) => {
  const page = Number(query?.page) || 1
  try {
    const {data} = await client.query({
      query: gql `
        query getCharacters {
          characters(page:${page}) {
            results{
              id
              name
              image
            }
          }
        }
      `
      })

      return {
          props: { 
              characters: data.characters.results
          }
      }
  } catch (error) {
    return {notFound: true,}
  }
  
}

export default Home
