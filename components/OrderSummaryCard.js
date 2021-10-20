import classes from './OrderSummaryCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

const OrderSummaryCard = () => {
  return (
    <div className={classes.body}>
      // card component container
      <div className={classes.container}>
        // header pic w/headphones guy
        <header></header>
        // main holds contents of the card
        <main>
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          // section is the gray box with music icon, annual plan, change link
          <section>
            <div className={classes.itunesLogo}>
              <Image src="/icon-music.svg" width="70%" height="25%" />
              <p>
                <span>Annual Plan</span> $59.99/year
              </p>
            </div>
            <div className={classes.change}>
              <Link href="/change">Change</Link>
            </div>
          </section>
          // footer holds payment button and cancel order link
          <footer className={classes.footer}>
            <button>Proceed to Payment</button>
            <Link href="/dummy">Cancel Order</Link>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
