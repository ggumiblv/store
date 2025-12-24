import deviceStore from '../store/DeviceStore';
import { observer } from 'mobx-react-lite';

const BrandBar = () => {
  return (
    <ul className="list-group list-group-horizontal d-flex flex-wrap">
      {deviceStore.brands.map((brand) => (
        <li
          className={`list-group-item flex-fill ${
            brand.id === deviceStore.selectedBrand.id ? 'list-group-item-secondary' : ''
          }`}
          style={{ cursor: 'pointer' }}
          onClick={() => deviceStore.setSelectedBrand(brand)}
          key={brand.id}
        >
          {brand.name}
        </li>
      ))}
    </ul>
  );
};

export default observer(BrandBar);
