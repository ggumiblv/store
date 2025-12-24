import { createDevice, fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';
import DeviceStore from '../../store/DeviceStore';
import { useEffect, useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { observer } from 'mobx-react-lite';

const CreateDevice = ({ show, onHide }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('brandId', DeviceStore.selectedBrand.id);
    formData.append('typeId', DeviceStore.selectedType.id);
    formData.append('info', JSON.stringify(info));
    createDevice(formData).then((data) => console.log(data));

    onHide();
  };

  useEffect(() => {
    fetchTypes().then((data) => DeviceStore.setTypes(data));
    fetchBrands().then((data) => DeviceStore.setBrands(data));
    fetchDevices().then((data) => DeviceStore.setDevices(data.rows));
  }, []);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить новое устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Dropdown>
            <Dropdown.Toggle>{DeviceStore.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {DeviceStore._types.map((type) => (
                <Dropdown.Item onClick={() => DeviceStore.setSelectedType(type)} key={type.id}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>{DeviceStore.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {DeviceStore._brands.map((brand) => (
                <Dropdown.Item onClick={() => DeviceStore.setSelectedBrand(brand)} key={brand.id}>
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите название"
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            type="number"
            placeholder="Введите стоимость"
          />
          <Form.Control type="file" onChange={(e) => selectFile(e)} />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <div key={i.number} style={{ display: 'flex', gap: '10px' }}>
              <Form.Control
                value={i.title}
                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                placeholder="Введите название свойства"
              />

              <Form.Control
                value={i.description}
                onChange={(e) => changeInfo('description', e.target.value, i.number)}
                placeholder="Введите описание свойства"
              />

              <Button variant="outline-dark" onClick={() => removeInfo(i.number)}>
                Удалить
              </Button>
            </div>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default observer(CreateDevice);
