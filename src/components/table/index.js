import React from 'react';
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from 'react-table';
import { CSVLink } from 'react-csv';
import { FaFileCsv } from 'react-icons/fa';
import { tabs } from '../../constants';
import useHistory from '../../utils/customHooks/useHistory';
import Button from '../button';
import SkeletonTable from '../skeleton';

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);
  return (
    <span className='dark:text-white flex items-center'>
      Search:{' '}
      <input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
          border: '0',
        }}
      />
    </span>
  );
}

const Table = ({
  columns,
  data,
  setQuery,
  setCurrentTab,
  currentTab,
  query,
  loading,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    preGlobalFilteredRows,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 20 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { setHistory } = useHistory();
  const handleRowClick = (row) => {
    if (currentTab !== tabs.output) {
      const value = row.values.query || row.values.history;
      var table_name =
        value.split(' ')[value.toLowerCase().split(' ').indexOf('from') + 1];
      setHistory(value);
      setQuery(table_name);
      setCurrentTab(tabs.output);
    }
  };

  const skeleton_columns = React.useMemo(
    () => [{ Header: '', accessor: 'skeleton' }],
    []
  );
  const skeleton_data = React.useMemo(
    () => Array(10).fill({ skeleton: '' }),
    []
  );
  return (
    <div className='flex flex-col'>
      <div className='flex'>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {currentTab === tabs.output && data.length && (
          <CSVLink data={data} filename={query}>
            <Button className={'mx-2 !p-1'}>
              <FaFileCsv />
              Download
            </Button>
          </CSVLink>
        )}
      </div>
      {loading ? (
        <SkeletonTable columns={skeleton_columns} data={skeleton_data} />
      ) : (
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-4 inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='border-b w-full' {...getTableProps()}>
                <thead className='border-b bg-gray-400 dark:bg-gray-800 dark:text-white'>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          className='text-sm font-medium dark:text-white px-6 py-4'
                          {...column.getHeaderProps()}
                        >
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {!data.length && (
                    <tr className='bg-white border-b hover:cursor-pointer even:bg-gray-200 odd:bg-gray-100 dark:even:bg-gray-600 dark:bg-gray-500'>
                      <td
                        colspan='2'
                        className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Run a query to see data
                      </td>
                    </tr>
                  )}
                  {page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr
                        className='bg-white border-b hover:cursor-pointer even:bg-gray-200 odd:bg-gray-100 dark:even:bg-gray-600 dark:bg-gray-500'
                        onClick={() => handleRowClick(row)}
                        {...row.getRowProps()}
                      >
                        {row.cells.map((cell) => {
                          return (
                            <td
                              className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white'
                              {...cell.getCellProps()}
                            >
                              {cell.render('Cell')}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className='pagination flex items-center my-5 dark:text-white text-xl'>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                  {'<<'}
                </button>{' '}
                <button
                  className='px-2'
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  {'<'}
                </button>{' '}
                <button
                  className='px-2'
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  {'>'}
                </button>{' '}
                <button
                  className='px-2'
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  {'>>'}
                </button>{' '}
                <span>
                  Page{' '}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{' '}
                </span>
                <span className='mx-2'>
                  | Go to page:{' '}
                  <input
                    aria-label='lbl-table-index'
                    className='dark:bg-gray-700'
                    type='number'
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                      const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(page);
                    }}
                    style={{ width: '100px' }}
                  />
                </span>{' '}
                <select
                  className='dark:bg-gray-700'
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50, 100, 200, 300, 400, 500].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
