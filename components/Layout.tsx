import Head from 'next/head'
//components
import React from 'react'
import Header from './Header'
//styles
import styles from '../styles/components/Layout.module.css'

type LayoutProps = {
    children: JSX.Element
}

const Layout:React.FC<LayoutProps> = ({ children })  => {
  return (
    <>
      <Head>
        <link 
          href='https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className={ styles.Layout }>
        <Header />
        <main className={ styles.Main }>{children}</main>
      </div>
    </>
  )
}

export default Layout