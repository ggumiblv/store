import deviceStore from '../store/DeviceStore';
import { observer } from 'mobx-react-lite';
import starImage from '../assets/star.svg';

const DeviceList = observer(() => {
  return (
    <ul className="list-group w-20 mt-5 d-flex flex-row flex-wrap gap-2 ">
      {deviceStore.devices.map((device) => (
        <div key={device.id} className="card" style={{ width: '18rem' }}>
          <img src={device.img} className="card-img-top" alt="..." />
          <div class="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 class="card-title m-0"> {device.name}</h5>
              <img style={{ width: '20px' }} src={starImage} />
            </div>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card’s
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </ul>
  );
});

export default DeviceList;
