import React from 'react';

function useMemoData(data) {
  const tableColumns = React.useMemo(() => {
    if (data.length > 0) {
      return Object.keys(data[0]).map((key) => {
        return {
          Header: key.toUpperCase(),
          accessor: key,
        };
      });
    } else {
      return [];
    }
  }, [data]);
  const tableData = React.useMemo(() => data, [data]);
  return { tableColumns, tableData };
}

export default useMemoData;
