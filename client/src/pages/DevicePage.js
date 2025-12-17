import { useParams } from 'react-router-dom';
import DeviceStore from '../store/DeviceStore';

const DevicePage = () => {
  const { id } = useParams();

  const device = DeviceStore._devices.find((device) => device.id === parseInt(id));

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <img style={{ width: '18rem' }} src={device.img} className="card-img-top" alt="..." />
      <h2>{device.name}</h2>
      <h4>price: {device.price}</h4>
      <h5>Характеристики:</h5>
      {device.description.map((item) => (
        <div key={item.id}>
          <span>{item.title}: </span>
          <span>{item.description}:</span>
        </div>
      ))}

      <button>Добавить в корзину</button>
    </div>
  );
};

export default DevicePage;
