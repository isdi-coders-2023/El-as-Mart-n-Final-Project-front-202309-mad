import { useEffect } from 'react';
import { Card } from '../card/card';
import './list.scss';
import { useClothes } from '../../hooks/use.clothes';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

export function List() {
  const { clothes } = useSelector((state: RootState) => state.clothesState);
  const { loadClothes } = useClothes();

  useEffect(() => {
    loadClothes();
  }, [loadClothes]);

  return (
    <>
      <div className="list-container">
        <div className="list-title-container">
          <h2>LAST DROP</h2>
        </div>
        <div className="size-filter-container">
          <select name="size-filter">
            <option value="">Selecciona una talla</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <ul className="clothes-list">
          {clothes.map((item) => (
            <Card key={item.id} clothingItem={item}></Card>
          ))}
        </ul>
      </div>
    </>
  );
}
