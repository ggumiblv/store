import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchOneDevices } from '../http/deviceAPI';

const DevicePage = () => {
  const { id } = useParams();
  const [device, setDevice] = useState({ info: [] });

  useEffect(() => {
    fetchOneDevices(id).then((data) => setDevice(data));
  }, []);

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      {device && (
        <>
          <img
            style={{ width: '18rem' }}
            src={process.env.REACT_APP_API_URL + '/' + device.img}
            className="card-img-top"
            alt="..."
          />
          <h2>{device.name}</h2>
          <h4>price: {device.price}</h4>
          <h5>Характеристики:</h5>

          {device.info?.map((item) => (
            <div key={item.id} style={{ marginBlock: '10px' }}>
              <span>{item.title}: </span>
              <span>{item.description}</span>
            </div>
          ))}
        </>
      )}
      <button>Добавить в корзину</button>
    </div>
  );
};

export default DevicePage;
