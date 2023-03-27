import { Header } from '@/components/Header'
import styles from './home.module.scss'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
   subsets: ['latin'],
   weight: "400", 
    })

export default function Home() {
  return ( 
  <>
  <Header/>
    <main className={styles.contentContainer}>
     
      <section className={styles.hero}>
        <span>👏 Hey, welcome</span>
        <h1>News about the <span>React</span> world.</h1>
        <p>
          Get access to all the publications <br/>
          <span>for $9.90 month</span>
        </p>

      </section>

      <img src="/images/avatar.svg" alt="Girl coding"/ >
      
    </main>
    </>
  )
}
