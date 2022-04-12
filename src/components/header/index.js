import Toggle from '../toggle';
import logo from '../../logo.svg';
export default function Header() {
  return (
    <nav className='bg-gray-300 border-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800'>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <a href='/' className='flex'>
          <img src={logo} className='App-logo h-14 w-14' alt='logo' />
          <span className='self-center text-lg font-semibold whitespace-nowrap dark:text-white'>
            SQL Compiler
          </span>
        </a>
        <div className='flex md:order-2'>
          <button
            id='theme-toggle'
            type='button'
            className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'
            aria-label='theme-toggle'
          >
            <Toggle />
          </button>
        </div>
      </div>
    </nav>
  );
}
