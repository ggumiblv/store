import { makeAutoObservable } from 'mobx';

class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Смартфоны' },
      { id: 3, name: 'Ноутбуки' },
      { id: 4, name: 'Телевизоры' }
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 1, name: 'Lenovo' },
      { id: 2, name: 'Asus' }
    ];
    this._devices = [
      {
        id: 1,
        name: 'Iphone 13',
        price: 25000,
        img: 'https://niceapplespb.ru/wp-content/uploads/2022/03/pink_1.jpeg'
      },
      {
        id: 2,
        name: 'Iphone 13',
        price: 25000,
        img: 'https://niceapplespb.ru/wp-content/uploads/2022/03/pink_1.jpeg'
      },
      {
        id: 3,
        name: 'Iphone 13',
        price: 25000,
        img: 'https://niceapplespb.ru/wp-content/uploads/2022/03/pink_1.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 13',
        price: 25000,
        img: 'https://niceapplespb.ru/wp-content/uploads/2022/03/pink_1.jpeg'
      }
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brandsh = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}

export default new DeviceStore();
