const Clock = () => {
  return <svg
    className="w-4 h-4 text-gray-500 dark:text-gray-400"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
      clipRule="evenodd"
    />
  </svg>;
};

export default Clock;
