import styles from '../styles/home.module.scss'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
   subsets: ['latin'],
   weight: "400", 
    })

export default function Home() {
  return (
    <main className={roboto.className}>
      <h1 className={styles.title}>Hello World</h1>
    </main>
    
  )
}
