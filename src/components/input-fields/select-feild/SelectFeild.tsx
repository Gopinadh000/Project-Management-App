import React from "react";




const SelectFeild = ({name ,  value ,onChange , label, options, required}:any) => {
  return (
    <div className="p-2 flex flex-col gap-1 w-full">
      <p>
        {label} {required && <span className="text-red-700">*</span>}
      </p>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-app-secondary-200  text-sm outline-none p-2.5 rounded-sm focus:border-app-primary-500 focus:ring-1 focus:ring-app-primary-100 transition-colors duration-200"
      >
        <option>Select Option</option>
        {options.map((item: any) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectFeild
