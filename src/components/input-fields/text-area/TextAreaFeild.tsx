


interface TextAreaFeildProps {
  name: string;
  value: string;
  rows?: number;
  cols?: number;
  label: string;
  required?: boolean;
  placeholder?: string;
  errMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaFeild = ({
  name,
  value,
  rows = 2,
  cols,
  label,
  required,
  placeholder,
  errMessage,
  onChange,
}: TextAreaFeildProps) => {
  return (
    <div className="p-2 flex flex-col gap-1">
      <p>
        {label} {required && <span className="text-red-500">*</span>}{" "}
      </p>
      <textarea
        className="w-full  min-h-[60px] outline-none border  p-1 text-md  focus-within:border-app-primary-500
    focus-within:ring-1
    focus-within:ring-app-primary-100"
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
      />
      {errMessage && <p className="text-red-600 text-sm">{errMessage}</p>}
    </div>
  );
};

export default TextAreaFeild
