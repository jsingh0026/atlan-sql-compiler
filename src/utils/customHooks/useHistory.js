
import { tabs } from '../../constants';

function useHistory() {
  const history = JSON.parse(localStorage.getItem(tabs.history)) || [];
  const setHistory = (data) => {
    history.push(data);
    localStorage.setItem(tabs.history, JSON.stringify(history));
  };
  const history_data = history.map((data, index) => {
    return { id: index + 1, history: data };
  });
  return { history, setHistory, history_data };
}

export default useHistory;
