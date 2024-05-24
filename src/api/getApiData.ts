import axios from 'axios';
import {
  db,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from '../config/Firebase.ts';
import { TickerType } from '../types.ts';

const FINNHUB_TOKEN = import.meta.env.VITE_FINNHUB_TOKEN;
const FINNHUB_BASE_URL = import.meta.env.VITE_FINNHUB_BASE_URL;

export async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, 'myStocks'));
  const data: TickerType[] = [];
  querySnapshot.forEach((doc) => {
    const { ticker, shares } = doc.data();
    data.push({ id: doc.id, ticker, shares: parseInt(shares) });
  });
  return data;
}

export async function fetchStockTicker(tickerName: string) {
  const myQuery = query(
    collection(db, 'myStocks'),
    where('ticker', '==', tickerName)
  );
  const querySnapshot = await getDocs(myQuery);
  const data: TickerType[] = [];
  querySnapshot.forEach((item) => {
    const { ticker, shares } = item.data();
    const ref = doc(db, 'myStocks', item.id);
    updateDoc(ref, {
      shares: shares + 1,
    });
    data.push({ id: item.id, ticker, shares: parseInt(shares) });
  });
  return data;
}

export async function getStocksData(stock: string) {
  const tickerCall = await axios
    .get(`${FINNHUB_BASE_URL}?symbol=${stock}&token=${FINNHUB_TOKEN}`)
    .catch((error) => {
      console.log(error);
    });
  return tickerCall;
}
