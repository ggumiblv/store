import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';

const Shop = () => {
  return (
    <div className="d-flex m-2">
      <TypeBar />
      <div className="ms-5">
        <BrandBar />
        <DeviceList />
      </div>
    </div>
  );
};

export default Shop;
