import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';


const SeminarsList = lazy(() => import('@components/SeminarsList'));

function App() {
  return <div className="text-white w-full dark:bg-gray-950">
    <div className="px-4 mx-auto max-w-7xl py-10">
      <SeminarsList/>
    </div>
    <ToastContainer theme='dark'/>
  </div>;
}

export default App;
