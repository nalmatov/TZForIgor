export const BASE_URL: string = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

export const ENDPOINTS = {
  SEMINARS: '/seminars/',
  SEMINAR: (id: number) => `/seminars/${id}/`,
};
