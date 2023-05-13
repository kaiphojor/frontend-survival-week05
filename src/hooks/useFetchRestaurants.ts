import { useFetch } from 'usehooks-ts';
import Restaurant from '../types/Restaurant';

type FetchData = {
  // [restaurants: string]: Restaurant[];
  restaurants : Restaurant[]

}

export default function useFetchRestaurants(): Restaurant[] {
  const { data } = useFetch<FetchData>('http://localhost:3000/restaurants');
  if (!data) {
    return [];
  }

  return data.restaurants;
}
