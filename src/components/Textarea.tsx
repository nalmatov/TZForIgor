interface TextareaProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({ label='', value='', onChange=()=>{} }) => {
  return (
    <label className="grid mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {
        label ? <span className="mb-2">{label}</span> : null
      }
      <textarea
        value={value}
        onChange={({ target: { value } }) => onChange(value)} 
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Введите описание семинара..."
      ></textarea>     
    </label>
  );
};

export default Textarea;
