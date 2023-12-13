import { useEffect } from 'react';
import { Card } from '../card/card';
import './list.scss';
import { useClothes } from '../../hooks/clothes/use.clothes';
import { Filter } from '../filter/filter';
import { RetroPhotos } from '../retro.photos/retro.photos';

export function List() {
  const { loadClothes, clothes } = useClothes();

  useEffect(() => {
    loadClothes();
  }, [loadClothes]);

  return (
    <div className="list-container">
      <RetroPhotos></RetroPhotos>
      <div className="list-title-container">
        <h2>LAST DROP</h2>
      </div>
      <Filter></Filter>
      <ul className="clothes-list">
        {clothes.map((item) => (
          <Card key={item.id} clothingItem={item}></Card>
        ))}
      </ul>
    </div>
  );
}
