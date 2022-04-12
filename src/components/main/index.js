import React, { lazy, Suspense } from 'react';
import { tabs } from '../../constants';
import useTableData from '../../utils/customHooks/useTableData';

const SkeletonTable = lazy(() => import('../skeleton'));
const Header = lazy(() => import('../header'));
const Editor = lazy(() => import('../editor'));
const Tabs = lazy(() => import('../tabs'));
const Table = lazy(() => import('../table'));
const Footer = lazy(() => import('../footer'));

export default function Main() {
  const [currentTab, setCurrentTab] = React.useState(tabs.query);
  const [query, setQuery] = React.useState('');
  const [value, setValue] = React.useState('select * from customers');
  const { columns, data, error, loading } = useTableData(query, currentTab);
  React.useEffect(() => {}, [currentTab, query]);

  const skeleton_columns = React.useMemo(
    () => [{ Header: '', accessor: 'skeleton' }],
    []
  );
  const skeleton_data = React.useMemo(
    () => Array(10).fill({ skeleton: '' }),
    []
  );
  return (
    <div className='dark:bg-gray-900'>
      <Suspense fallback={<></>}>
        <Header />
        <div className={`mx-6 mt-12 lg:mx-12`}>
          <Editor
            setQuery={setQuery}
            value={value}
            setValue={setValue}
            setCurrentTab={setCurrentTab}
          />
          <Tabs setCurrentTab={setCurrentTab} currentTab={currentTab} />
          {error.message && currentTab === tabs.output ? (
            <div className='py-10 bg-red-800 my-5 text-white'>
              {error.message}
            </div>
          ) : loading ? (
            <SkeletonTable columns={skeleton_columns} data={skeleton_data} />
          ) : (
            <Table
              data={data}
              columns={columns}
              query={query}
              setQuery={setQuery}
              setCurrentTab={setCurrentTab}
              currentTab={currentTab}
            />
          )}
        </div>
        <Footer />
      </Suspense>
    </div>
  );
}
