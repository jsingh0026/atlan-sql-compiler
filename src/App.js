import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import { ThemeProvider } from './themeContext';

function App() {
  return (
    <div className='App dark:bg-gray-900'>
      <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
