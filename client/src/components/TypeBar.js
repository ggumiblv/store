import deviceStore from '../store/DeviceStore';
import { observer } from 'mobx-react-lite';

const TypeBar = observer(() => {
  return (
    <ul className="list-group w-20">
      {deviceStore.types.map((type) => (
        <li
          className={`list-group-item ${type.id === deviceStore.selectedType.id ? 'active' : ''}`}
          style={{ cursor: 'pointer' }}
          onClick={() => deviceStore.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </li>
      ))}
    </ul>
  );
});

export default TypeBar;
