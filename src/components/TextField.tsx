interface TextFieldProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void; 
}

const TextField: React.FC<TextFieldProps> = ({ label='', value='', onChange=()=>{} }) => {
  return (
    <label className="grid text-sm font-medium text-gray-900 dark:text-white">
      {
        label ? <span className="mb-2">{label}</span> : null
      }
      <input
        type="text"
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Введите название семинара"
        required
      />
    </label>
  );
};

export default TextField;
