import React, { useEffect } from 'react';
import { history_columns, tabs } from '../../constants';
import { query_columns, query_data } from '../../constants';
import useGetData from '../customHooks.js/useGetData';
import useMemoData from '../customHooks.js/useMemoData';
import useHistory from '../customHooks.js/useHistory';

function useTableData(query, currentTab) {
  const { response_data, error, loading } = useGetData(query);
  const { history_data } = useHistory();

  const { tableColumns, tableData } = useMemoData(response_data);
  const [columns, setColumns] = React.useState([]);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const setTableData = () => {
      setColumns([]);
      setData([]);
      switch (currentTab) {
        case tabs.query:
          // pre-defined queries
          setColumns(query_columns);
          setData(query_data);
          break;
        case tabs.output:
          // SQL output
          setColumns(tableColumns);
          setData(tableData);
          break;
        case tabs.history:
          // SQL history
          setColumns(history_columns);
          setData(history_data);
          break;
        default:
          setColumns([]);
          setData([]);
          break;
      }
    };
    setTableData();
  }, [currentTab, response_data, history_data, tableData, tableColumns]);
  return { columns, data, error, loading };
}

export default useTableData;
