import { default as ReactDatePicker } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '@/styles/react-datepicker.css';


interface DatePickerProps {
  value?: Date | null;
  onChange?: (date: Date | null) => void; 
}

const DatePicker: React.FC<DatePickerProps> = ({ value=null, onChange=()=>{} }) => { /* custom datepicker */
  return (
    <div className="w-full">
      <label
        className="grid mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        <span className="mb-2">Выберите дату:</span>
        <ReactDatePicker
          selected={value}
          onChange={(date) => onChange(date)}
          dateFormat="dd.MM.yyyy"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholderText="Выберите дату"
        />
      </label>
    </div>
  );
};

export default DatePicker;