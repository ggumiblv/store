import { useState } from 'react';

import CreateDevice from '../components/modals/CreateDevice';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import Button from 'react-bootstrap/Button';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Button variant="outline-secondary" onClick={() => setTypeVisible(true)}>
        Добавить тип
      </Button>
      <Button variant="outline-secondary" onClick={() => setBrandVisible(true)}>
        Добавить бренд
      </Button>
      <Button variant="outline-secondary" onClick={() => setDeviceVisible(true)}>
        Добавить устройство
      </Button>

      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
    </div>
  );
};

export default Admin;
