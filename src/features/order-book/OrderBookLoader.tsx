import ReactLoading from 'react-loading';
import styles from './OrderBook.module.css';

export default function OrderBookLoader(): JSX.Element {
  return (
    <div className={styles.loader}>
      <ReactLoading type="bars" color="white" />
    </div>
  );
}
