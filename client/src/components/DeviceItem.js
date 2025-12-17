import { DEVICE_ROUTE } from '../utils/consts';

import starImage from '../assets/star.svg';

const DeviceItem = ({ device }) => {
  return (
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
        <a href={DEVICE_ROUTE + '/' + device.id} class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default DeviceItem;
