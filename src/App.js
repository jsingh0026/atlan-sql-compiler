import { Suspense } from 'react';
import { lazy } from 'react';
import './App.css';
import { ThemeProvider } from './themeContext';

const Header = lazy(() => import('./components/header'));
const Main = lazy(() => import('./components/main'));
const Footer = lazy(() => import('./components/footer'));

function App() {
  return (
    <div className='App dark:bg-gray-900'>
      <ThemeProvider>
        <Suspense fallback={<>Loading...</>}>
          <Header />
          <Main />
          <Footer />
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
