import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza from Rakovizza</title>
        <meta name="description" content="Ubedljivo najbolja pica u Rakovici, a i sire!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
    </div>
  )
}