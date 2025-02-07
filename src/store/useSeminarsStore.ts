import { create } from 'zustand';

import requester from '@/common/requester';
import { ENDPOINTS } from '@/common/constants';
import { SeminarType } from '@/types';

import { toast } from 'react-toastify';


interface SeminarsStateType {
  seminars: SeminarType[],
}

interface SeminarActionsType {
  getSeminars: () => void;
  editSeminar: (seminar: SeminarType) => void;
  deleteSeminar: (id: number) => void;
}

// Store for data from backend
const initialState: SeminarsStateType = {
  seminars: [],
};

const useSeminarsStore = create<SeminarsStateType & SeminarActionsType>()((set, get) => ({
  ...initialState,
  async getSeminars() { /* get all seminars from seminars.json */
    try {
      const { data } = await requester.get(ENDPOINTS.SEMINARS);
  
      set(() => ({ seminars: data }));
    } catch {
      throw new Error('Ошибка при получении семинаров!');
    }
  },
  async editSeminar(seminar) { /* edit seminar by id */
    try {
      await requester.put(ENDPOINTS.SEMINAR(seminar.id), seminar);
      await get().getSeminars();
      toast.success('Семинар отредактирован!');
    } catch {
      const errorMessage = 'Ошибка при редактировании семинара!';
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  },
  async deleteSeminar(id) {
    try {
      await requester.delete(ENDPOINTS.SEMINAR(id));
      await get().getSeminars();
      toast.warning('Вы удалили семинар!');
    } catch {
      const errorMessage = 'Ошибка при удалении семинара!';
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  },
}));

export default useSeminarsStore;
