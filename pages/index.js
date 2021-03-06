import Head from 'next/head'
import Transition from '../components/transition'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <Transition>
      <div className={styles.page}>
        <h1 className={styles.headline}>This is the first page</h1>
        <br />
        <Link href="/second" passHref><a>Go to next page</a></Link>
      </div>
    </Transition>
  )
}
