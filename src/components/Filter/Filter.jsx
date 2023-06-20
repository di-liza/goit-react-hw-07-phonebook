import { FilterBox } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFiter } from '../../redux';
import { setFilterValue } from 'redux/filterSlice';

export function Filter() {
  const filter = useSelector(selectFiter);
  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(setFilterValue(value.trim()));
  };

  return (
    <FilterBox>
      <p>Find contacts by name</p>
      <input
        onChange={handleFilterChange}
        className="styled-input"
        value={filter}
        name={filter}
      />
    </FilterBox>
  );
}
