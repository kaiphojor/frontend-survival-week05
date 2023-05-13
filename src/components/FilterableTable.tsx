import RestaurantItem from './RestaurantItem';
import SearchBar from './SearchBar';

function FilterableTable() {
  return (
    <div>
      <SearchBar />
      <table>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>짱개집</td>
            <td>중식</td>
            <td>짱개</td>
          </tr>
        </tbody>
      </table>
      <RestaurantItem />
    </div>
  );
}

export default FilterableTable;
