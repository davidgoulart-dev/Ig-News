import { Header } from '@/components/Header';
import styles from './home.module.scss';
import { Roboto } from 'next/font/google';
import { SubscribeButton } from '@/components/SubscribeButton';
import { getServerProduct } from '@/components/Product.server';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

interface Product {
  priceId: string;
  amount: number;
}

interface HomeProps {
  product: Product | null;
}

export async function getServerSideProps() {
  const product = await getServerProduct();
  return { props: { product } };
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

const Home: React.FC<HomeProps> = ({ product }) => {
  console.log('Home component rendered');
  console.log('Product data:', product);
  return (
    <>
      <Header />
      <main className={styles.contentContainer}>
    <section className={styles.hero}>
      <span>👏 Hey, welcome</span>
      <h1>News about the <span>React</span> world.</h1>
      <p>
        Get access to all the publications <br />
        <span>for {product && formatCurrency(product.amount)} per month</span>
      </p>
      <SubscribeButton />
    </section>

    <img src="/images/avatar.svg" alt="Girl coding" />
  </main>
</>
);
};

export default Home;





