import Cart from './components/Cart';
import FilterableTable from './components/FilterableTable';
import ReceiptPrinter from './components/ReceiptPrinter';
import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const restaurants = useFetchRestaurants();
  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart />
      <FilterableTable />
      <ReceiptPrinter />
    </div>
  );
}
