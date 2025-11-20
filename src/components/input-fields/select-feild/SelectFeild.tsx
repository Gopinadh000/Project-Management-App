import React from "react";




const SelectFeild = ({name ,  value ,onChange , label, options, required}:any) => {
  return (
    <div className='p-2 flex flex-col gap-1'>
     <p>{label} {required &&  <span className='text-red-700'>*</span>}</p>
      <select name={name} value={value} onChange={onChange} className='w-full h-10 size-4 overflow-y-auto outline-none border border-black'>
        <option>Select Option</option>
         {options.map((item:any)=> 
           <option key={item.id} value={item.value}>{item.label}</option>
          )}
      </select>
    </div>
  )
}

export default SelectFeild
