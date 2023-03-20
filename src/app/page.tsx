import styles from '../styles/home.module.scss'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Hello <span>World</span></h1>
    </div>
    
  )
}
