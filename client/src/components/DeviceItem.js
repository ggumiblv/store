import { DEVICE_ROUTE } from '../utils/consts';

import starImage from '../assets/star.svg';

const DeviceItem = ({ device }) => {
  return (
    <div key={device.id} className="card" style={{ width: '18rem' }}>
      <img
        src={process.env.REACT_APP_API_URL + '/' + device.img}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title m-0"> {device.name}</h5>
          <img style={{ width: '20px' }} src={starImage} />
        </div>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card’s
          content.
        </p>
        <a href={DEVICE_ROUTE + '/' + device.id} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default DeviceItem;
