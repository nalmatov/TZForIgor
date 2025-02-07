import { lazy, useEffect, useMemo, useState } from 'react';
import { useModalStore, useSeminarsStore, initialSeminar } from '@/store';
import { SeminarType } from '@/types';


const TextField = lazy(() => import('@components/TextField'));
const Textarea = lazy(() => import('@components/Textarea'));
const DatePicker = lazy(() => import('@components/DatePicker'));
const TimePicker = lazy(() => import('@components/TimePicker'));
const Modal = lazy(() => import('@components/Modal'));
const Button = lazy(() => import('@components/Button'));

const EditModal = () => {
  const { seminarEdit: { isOpen, setIsOpen }, seminar } = useModalStore();
  const { editSeminar } = useSeminarsStore();

  const [ newSeminar, setNewSeminar ] = useState<SeminarType>(seminar);
  const { title, description, date, time } = newSeminar;

  /* For a DatePicker component that accepts a Date type */
  const formatedDate = useMemo(() => {
    if (!seminar.date) return;

    const [ d, m, y ] = `${date}`.split('.').map((str) => parseInt(str));
    const newDate = new Date(y, m-1, d);

    return newDate;
  }, [date]);

  /* Check for changes */
  const hasChanges = useMemo(() => {
    return JSON.stringify(seminar) === JSON.stringify(newSeminar);
  }, [seminar, newSeminar]);

  const handleClose = () => (setIsOpen(false));
  /* onChane listener for all fields */
  const handleChangeField =
    (value: unknown, key: string) => (setNewSeminar({ ...newSeminar, [key]: value }));
  /* onChange listener only for DatePicker */
  const handleChangeDate = 
    (date: Date | null) => (setNewSeminar({ ...newSeminar, date: date?.toLocaleDateString() || '' }));
  /* Save edited changes */
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    editSeminar(newSeminar);
    handleClose();
  };

  useEffect(() => {
    if (isOpen) {
      setNewSeminar(seminar);
    } else {
      const _initialSeminar = { ...initialSeminar, date: new Date().toLocaleDateString() };
      setNewSeminar(_initialSeminar);
    }
  }, [seminar, isOpen]);
  return (
    <Modal isOpen={isOpen} onClose={handleClose} title='Редактирование'>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          {/* Seminar title */}
          <TextField
            label='Название'
            value={title}
            onChange={(value) => handleChangeField(value, 'title')}
          />

          {/* Seminar description */}
          <Textarea value={description} onChange={(value) => handleChangeField(value, 'description')}/>

          {/* Seminar date & time */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <DatePicker value={formatedDate} onChange={handleChangeDate}/>
            <TimePicker value={time} onChange={(value) => handleChangeField(value, 'time')}/>
          </div>

          {/* Result buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Button onClick={handleClose}>Отмена</Button>
            <Button type='submit' variant='success' disabled={hasChanges}>Сохранить</Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
