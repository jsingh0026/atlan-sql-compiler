import Toggle from '../toggle';
import logo from '../../logo.svg';
export default function Header() {
  return (
    <nav class='bg-gray-300 border-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800'>
      <div class='container mx-auto flex flex-wrap items-center justify-between'>
        <a href='/' class='flex'>
          <img src={logo} className='App-logo h-14 w-14' alt='logo' />
          <span class='self-center text-lg font-semibold whitespace-nowrap dark:text-white'>
            SQL Compiler
          </span>
        </a>
        <div class='flex md:order-2'>
          <button
            id='theme-toggle'
            type='button'
            class='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'
          >
            <Toggle />
          </button>
        </div>
      </div>
    </nav>
  );
}
