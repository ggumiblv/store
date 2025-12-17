import deviceStore from '../store/DeviceStore';
import { observer } from 'mobx-react-lite';

import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
  return (
    <ul className="list-group w-20 mt-5 d-flex flex-row flex-wrap gap-2 ">
      {deviceStore.devices.map((device) => (
        <DeviceItem device={device} />
      ))}
    </ul>
  );
});

export default DeviceList;
