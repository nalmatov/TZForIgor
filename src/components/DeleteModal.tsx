import { lazy } from 'react';
import { useModalStore, useSeminarsStore } from '@/store';


const Modal = lazy(() => import('@components/Modal'));
const DangerAlert = lazy(() => import('@components/DangerAlert'));
const Button = lazy(() => import('@components/Button'));

const DeleteModal = () => {
  const { seminarDelete: { isOpen, setIsOpen }, seminar: { id } } = useModalStore();
  const { deleteSeminar } = useSeminarsStore();

  const handleClose = () => (setIsOpen(false));
  const handleDelete = () => (deleteSeminar(id), handleClose());
  return (
    <Modal isOpen={isOpen} onClose={handleClose} title='Удаление'>
      <div className="grid gap-2">
        <DangerAlert><br/>Семинар удалится безвозратно! Вы уверены что хотите удалить семинар?</DangerAlert>
        {/* Result buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Button onClick={handleClose}>Отмена</Button>
          <Button type='submit' variant='delete' onClick={handleDelete}>Удалить</Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
