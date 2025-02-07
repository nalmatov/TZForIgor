import { SeminarType } from '@/types';
import { create } from 'zustand';


interface ModalStateType {
  seminar: SeminarType;
  seminarEdit: {
    isOpen: boolean;
  };
  seminarDelete: {
    isOpen: boolean;
  }
}

interface ModalActionsType {
  seminarEdit: {
    setIsOpen(isOpen: boolean): void,
  };
  seminarDelete: {
    setIsOpen(isOpen: boolean): void,
  },
  setSeminar: (seminar: SeminarType) => void;
}

export const initialSeminar = {
  id: 0,
  title: '',
  description: '',
  date: '',
  time: '',
  photo: '',
};

const initialState: ModalStateType = {
  seminar: initialSeminar,
  seminarEdit: {
    isOpen: false,
  },
  seminarDelete: {
    isOpen: false,
  },
};

const useModalStore = create<ModalStateType & ModalActionsType>()((set) => ({
  seminar: initialState.seminar,
  seminarEdit: {
    ...initialState.seminarEdit,
    setIsOpen(isOpen) {
      set((state) => ({ seminarEdit: { ...state.seminarEdit, isOpen } }));
    }
  },
  seminarDelete: {
    ...initialState.seminarDelete,
    setIsOpen(isOpen) {
      set((state) => ({ seminarDelete: { ...state.seminarDelete, isOpen } }));
    }
  },
  setSeminar(seminar) {
    set(() => ({ seminar }));
  }
}));

export default useModalStore;
