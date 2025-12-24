import { observer } from 'mobx-react-lite';

import Pagination from 'react-bootstrap/Pagination';

const Pages = () => {
  const pages = [1, 2, 3, 4, 5];

  return (
    <Pagination style={{ marginTop: '30px' }}>
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          //active={number === active}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default observer(Pages);
