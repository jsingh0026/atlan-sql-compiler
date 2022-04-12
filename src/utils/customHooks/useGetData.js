import React, { useEffect } from 'react';
import axios from 'axios';
import CSVToJSON from '../helper';

function useGetData(table_name) {
  const [response_data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({});
  const file_url = `https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/${table_name}.csv`;

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      setError({});
      setData([]);
      axios
        .get(file_url)
        .then((response) => {
          setData(CSVToJSON(response.data));
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    };

    if (table_name) fetchData();
  }, [table_name, file_url]);
  return { response_data, error, loading };
}

export default useGetData;
