import { render, screen } from '@testing-library/react';
import useFetchRestaurants from '../hooks/__mocks__/useFetchRestaurants';
import FilterableTable from './FilterableTable';

const context = describe;

describe('FilterableTable은', () => {
  // given
  beforeEach(() => {
    render(<FilterableTable />);
  });

  jest.mock('../hooks/__mocks__/useFetchRestaurants');
  // jest.mock('../hooks/useFetchRestaurants');
  // jest.mock('../hooks/__mocks__/useFetchRestaurants', () => () => fixtures.restaurants);

  // when
  context('restaurants를 가져오면', () => {
    const restaurants = useFetchRestaurants();
    // then
    it('item 갯수가 1개 이상이다', () => {
      expect(restaurants.length).toBeGreaterThan(0);
    });
  });

  // when
  context('테이블 항목을 보면', () => {
    // Then
    it('식당 이름, 종류, 메뉴가 보인다.', () => {
      expect(screen.queryByText(/식당 이름/)).toBeVisible();
      expect(screen.queryByText(/종류/)).toBeVisible();
      expect(screen.queryByText(/메뉴/)).toBeVisible();
    });
  });
});
