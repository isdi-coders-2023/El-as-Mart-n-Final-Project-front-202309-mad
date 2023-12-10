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
        <ul className="clothes-list">
          {clothes.map((item) => (
            <Card key={item.id} clothingItem={item}></Card>
          ))}
        </ul>
      </div>
    </>
  );
}
