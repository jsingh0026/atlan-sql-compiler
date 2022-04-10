import { FaGithub, FaGithubAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='text-center bg-gray-300 dark:text-white dark:bg-gray-800'>
      <div className='flex items-center justify-center p-5'>
        Codebase:
        <a
          href='https://github.com/jsingh0026/atlan-sql-compiler'
          target='_blank'
          rel="noopener noreferrer"
          type='button'
        >
            <FaGithub className='mx-2 h-6 w-6'/>
        </a>
        Creator:
        <a
          href='https://github.com/jsingh0026'
          target='_blank'
          rel="noopener noreferrer"
          type='button'
        >
            <FaGithubAlt className='mx-2 h-6 w-6'/>
        </a>
      </div>
      <div className='text-center pb-5'>© 2022 Copyright: SQL Compiler</div>
    </footer>
  );
}

export default Footer;
