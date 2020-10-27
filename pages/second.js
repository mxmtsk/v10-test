import Head from 'next/head'
import Transition from '../components/transition'
import styles from '../styles/Second.module.css'
import Link from 'next/link';

export default function Second() {
  return (
    <Transition>
      <div className={styles.page}>
        <h1 className={styles.headline}>This is the second page</h1>
        <br />
        <Link href="/" passHref><a>Go to first page</a></Link>
      </div>
    </Transition>
  )
}
