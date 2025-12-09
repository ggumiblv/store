import deviceStore from '../store/DeviceStore';
import { observer } from 'mobx-react-lite';

const BrandBar = observer(() => {
  return (
    <ul class="list-group list-group-horizontal d-flex flex-wrap">
      {deviceStore.brands.map((brand) => (
        <li
          class={`list-group-item flex-fill ${
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
});

export default BrandBar;
