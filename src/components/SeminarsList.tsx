import { useSeminarsStore } from '@store';
import { lazy, useEffect } from 'react';


const DeleteModal = lazy(() => import('@components/DeleteModal'));
const EditModal = lazy(() => import('@components/EditModal'));
const SeminarCard = lazy(() => import('@components/SeminarCard'));

const SeminarsList = () => {
  const { seminars, getSeminars } = useSeminarsStore();
  
  useEffect(()=> {
    getSeminars();
  }, []);

  if (!seminars.length) return 'seminars is empty';
  return (
    <>
      <ul className="grid grid-cols-3 gap-15">
        {
          seminars.map((seminar) => 
            <li className="parent-h-full" key={seminar.id}>
              <SeminarCard data={seminar}/>
            </li>)
        }
      </ul>
      {/* Modal windows for editing or deleting seminar by ID */}
      <EditModal/>
      <DeleteModal/>
    </>
  );
};

export default SeminarsList;
