export const tabs = {
  query: 'query',
  output: 'output',
  history: 'history',
};

export const query_columns = [
  {Header: '#', accessor: 'id'},
  {Header: 'QUERY', accessor: 'query'},
]
export const history_columns = [
  {Header: '#', accessor: 'id'},
  {Header: 'HISTORY', accessor: 'history'},
]
export const query_data = [
  {id: '1', query: 'SELECT * FROM categories'},
  {id: '2', query: 'SELECT * FROM customers'},
  {id: '3', query: 'SELECT * FROM employee_territories'},
  {id: '4', query: 'SELECT * FROM employees'},
  {id: '5', query: 'SELECT * FROM order_details'},
  {id: '6', query: 'SELECT * FROM orders'},
  {id: '7', query: 'SELECT * FROM products'},
  {id: '8', query: 'SELECT * FROM regions'},
  {id: '9', query: 'SELECT * FROM shippers'},
  {id: '10', query: 'SELECT * FROM suppliers'},
  {id: '11', query: 'SELECT * FROM territories'},
]
