import Head from 'next/head';
import OrderSummaryCard from '../components/OrderSummaryCard';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Order Summary Card</title>
      </Head>
      <OrderSummaryCard />
    </div>
  );
};

export default Home;
