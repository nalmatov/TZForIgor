import { lazy, Suspense } from 'react';
import { SeminarType } from '@/types';
import { useModalStore } from '@store';


const Button = lazy(() => import('@components/Button'));

interface SeminarCardProps {
  data: SeminarType;
}

const SeminarCard: React.FC<SeminarCardProps> = ({ data }) => {
  const { title, description, date, time, photo } = data;
  const { setSeminar, seminarEdit, seminarDelete, seminar } = useModalStore();

  const handleEdit = () => {
    if (seminar !== data) {
      setSeminar(data);
    }
    seminarEdit.setIsOpen(true);
  };

  const handleDelete = () => {
    if (seminar !== data) {
      setSeminar(data);
    }
    seminarDelete.setIsOpen(true);
  };
  return  (
    <div className='flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
      <Suspense fallback={<div className='rounded-t-lg'></div>}>
        <img src={photo} alt='Image' className="rounded-t-lg w-full h-70" />
      </Suspense>
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h5>
        <p className='mb-2 font-normal text-gray-700 dark:text-gray-400'>{description}</p>
      </div>
      <div className="mt-auto p-5">
        <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">{`${date}`} | {time}</p>
        <Button onClick={handleEdit}>Редактировать</Button>
        <Button onClick={handleDelete} variant='delete'>Удалить</Button>
      </div>
    </div>
  );
};

export default SeminarCard;
