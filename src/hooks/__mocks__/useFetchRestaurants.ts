import fixtures from '../../../fixtures';
import Restaurant from '../../types/Restaurant';

export default function useFetchRestaurants(): Restaurant[] {
  return fixtures.restaurants;
}
