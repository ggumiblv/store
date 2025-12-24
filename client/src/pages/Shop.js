import { useEffect } from 'react';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import DeviceStore from '../store/DeviceStore';
import Pages from '../components/Pages';

const Shop = () => {
  useEffect(() => {
    fetchTypes().then((data) => DeviceStore.setTypes(data));
    fetchBrands().then((data) => DeviceStore.setBrands(data));
    fetchDevices().then((data) => DeviceStore.setDevices(data.rows));
  }, []);

  return (
    <div className="d-flex m-2">
      <TypeBar />
      <div className="ms-5">
        <BrandBar />
        <DeviceList />
        <Pages />
      </div>
    </div>
  );
};

export default Shop;
