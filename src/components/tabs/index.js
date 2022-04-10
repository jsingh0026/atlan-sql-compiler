import { tabs } from '../../constants';
import Button from '../button';

function Tabs({setCurrentTab, currentTab}) {
  const selected = (tab) => {
    if(currentTab === tab) return 'dark:bg-cyan-900 bg-cyan-300 text-white'
    return ''
  }
  return (
    <div className='flex justify-center'>
      <Button
        className={`dark:border-0 rounded-r-none ${selected(tabs.query)}`}
        onClick={() => setCurrentTab(tabs.query)}
      >
        Queries
      </Button>
      <Button
        className={`dark:border-y-0 rounded-none border-x-1 dark:border-cyan-700 ${selected(tabs.output)}`}
        onClick={() => setCurrentTab(tabs.output)}
      >
        Output
      </Button>
      <Button
        className={`dark:border-0 rounded-l-none ${selected(tabs.history)}`}
        onClick={() => setCurrentTab(tabs.history)}
      >
        History
      </Button>
    </div>
  );
}

export default Tabs;
