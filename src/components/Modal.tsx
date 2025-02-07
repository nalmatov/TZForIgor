import Close from '@/assets/icons/Close';
import cn from 'cn';


interface ModalProps {
  title?: string;
  isOpen?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen=false, title, onClose, children }) => {
  const hiddenCL = isOpen ? '' : 'hidden';
  return <div className={cn(hiddenCL, 'top-0 left-0 w-screen h-screen fixed')}>
    <div className="bg-black/50 w-full h-full top-0 left-0" onClick={onClose}></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 px-3 pt-3 pb-5 bg-white rounded-lg shadow-sm dark:bg-gray-700 z-10 flex flex-col">
      <div className="flex justify-between items-center mb-5">
        <h4>{title}</h4>
        <button onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
          <Close />
        </button>
      </div>
      {children}
    </div>
  </div>;
};

export default Modal;
