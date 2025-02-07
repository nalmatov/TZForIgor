import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '@/styles/index.css';
import '@/styles/react-toastify.css';


createRoot(document.getElementById('root')!).render(<App />);
