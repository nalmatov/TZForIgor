import cn from 'cn';


interface ButtonProps {
  type?: 'submit' | 'button';
  children: React.ReactNode;
  variant?: 'default' | 'delete' |  'success';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

interface VariantsType {
  default: string;
  delete: string;
  success: string
}

const variants: VariantsType = {
  default: 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
  delete: 'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
  success: 'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
};

const Button: React.FC<ButtonProps> = ({ type='button', children, variant='default', className='', onClick, disabled=false }) => {
  const disabledCN = disabled ? 'disabled-btn cursor-default' : '';
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn('cursor-pointer', variants[variant], className, disabledCN)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
