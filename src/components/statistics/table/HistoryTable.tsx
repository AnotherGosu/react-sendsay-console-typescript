import {useTable, useSortBy} from 'react-table';
import {useAppSelector} from 'store';
import {selectHistoryTableColumns} from 'store/slices/console/selectors';

import {Table, Head, Row, Header, Body, Cell} from './styled';
import {TABLE_HEADERS} from 'components/constants';

export default function HistoryTable() {
  const data = useAppSelector(selectHistoryTableColumns);
  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns: TABLE_HEADERS, data}, useSortBy);

  return (
    <Table {...getTableProps()}>
      <Head>
        {headerGroups.map((headerGroup) => (
          <Row {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Header {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')} {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
              </Header>
            ))}
          </Row>
        ))}
      </Head>

      <Body {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Row {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <Cell value={cell.value} {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Cell>
                );
              })}
            </Row>
          );
        })}
      </Body>
    </Table>
  );
}
