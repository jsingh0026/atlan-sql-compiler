import './App.css';
import Main from './components/main';
import { ThemeProvider } from './themeContext';

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
