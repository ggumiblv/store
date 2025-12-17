import DeviceStore from '../../store/DeviceStore';
import { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const CreateDevice = ({ show, onHide }) => {
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить новое устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Dropdown>
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {DeviceStore._devices.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
            <Dropdown.Menu>
              {DeviceStore._brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control placeholder="Введите название" />
          <Form.Control type="number" placeholder="Введите стоимость" />
          <Form.Control type="file" />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <div key={i.number} style={{ display: 'flex', gap: '10px' }}>
              <Form.Control placeholder="Введите название свойства" />

              <Form.Control placeholder="Введите описание свойства" />

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
        <Button variant="outline-success" onClick={onHide}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
