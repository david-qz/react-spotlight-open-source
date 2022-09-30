import { useState } from 'react';
import { Table as RTable, Column, HeaderCell, Cell } from 'rsuite-table';
import allUserData from '../users.json';
import 'rsuite-table/dist/css/rsuite-table.css';

const userData = allUserData.slice(0, 100);

export default function Table() {
  const [sortData, setSortData] = useState({ column: 'id', type: 'desc' });

  const ImageCell = ({ rowData, dataKey, ...rest }) => {
    return <Cell {...rest}>
      <img src={rowData[dataKey]} width="50" />
    </Cell>;
  };

  const handleSort = (sortColumn, sortType) => {
    setSortData({ column: sortColumn, type: sortType });
  };

  const users = userData.sort((aData, bData) => {
    const a = aData[sortData.column];
    const b = bData[sortData.column];

    const sign = sortData.type === 'asc' ? -1 : 1;
    if (typeof a === 'number') {
      return (a - b) * sign;
    }

    return sign * a.localeCompare(b);
  });

  return (
    <div className='self-center w-full px-5'>
      <RTable
        autoHeight
        data={users}
        sortColumn={sortData.column}
        sortType={sortData.type}
        onSortColumn={handleSort}
      >
        <Column sortable width={50}>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>
        <Column width={70}>
          <HeaderCell>Avatar</HeaderCell>
          <ImageCell dataKey="image" />
        </Column>
        <Column sortable flexGrow={1}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="last_name" />
        </Column>
        <Column sortable flexGrow={1}>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="first_name" />
        </Column>
        <Column sortable flexGrow={1}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
        <Column sortable flexGrow={1}>
          <HeaderCell>Favorite Color</HeaderCell>
          <Cell dataKey="favorite_color" />
        </Column>
      </RTable>
    </div>
  );
}
