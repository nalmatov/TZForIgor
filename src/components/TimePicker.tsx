import Clock from '@/assets/icons/Clock';
import React from 'react';


interface TimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ value='', onChange=()=>{} }) => {
  return (
    <div>
      <label
        htmlFor="time"
        className="grid mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        <span className="mb-2">Выберите время:</span>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
            <Clock />
          </div>
          <input
            type="time"
            id="time"
            className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            min="09:00"
            max="18:00"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required
          />
        </div>
      </label>
    </div>
  );
};

export default TimePicker;