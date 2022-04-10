import { useTable } from 'react-table';

function SkeletonTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-4 inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table
              className='border-b w-full animate-pulse'
              {...getTableProps()}
            >
              <thead className='border-b bg-gray-200 dark:bg-gray-800 dark:text-white'>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        className='text-sm font-medium dark:text-white px-6 py-6'
                        {...column.getHeaderProps()}
                      >
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr
                      className='bg-white border-b dark:even:bg-gray-600 dark:bg-gray-500'
                      {...row.getRowProps()}
                    >
                      {row.cells.map((cell) => {
                        return (
                          <td
                            className='px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white'
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonTable;
