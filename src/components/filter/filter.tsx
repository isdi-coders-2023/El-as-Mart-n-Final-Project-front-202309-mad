import { useClothes } from '../../hooks/clothes/use.clothes';
import './filter.scss';

export function Filter() {
  const { handleFilter } = useClothes();

  return (
    <div className="size-filter-container">
      <select onChange={handleFilter} name="size-filter">
        <option value="">Selecciona una talla</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
    </div>
  );
}
