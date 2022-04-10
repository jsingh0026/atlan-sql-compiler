function Button({ children, className, onClick }) {
  return (
    <button
      className={`
    bg-transparent 
    hover:bg-cyan-300 
    text-cyan-500 
    font-semibold 
    hover:text-white 
    py-2 px-4 border 
    border-cyan-300 
    hover:border-transparent 
    rounded 
    flex 
    items-center
    dark:bg-cyan-700
    dark:text-white
    dark:hover:bg-cyan-900 
    dark:border-cyan-500 
    ${className}`}
    onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
