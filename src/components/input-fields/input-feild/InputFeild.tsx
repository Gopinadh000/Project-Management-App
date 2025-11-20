
const InputFeild = ({label ,name, type, value,  placeholder, onChange, required}:any) => {
  return (
    <div className='p-2 flex flex-col gap-2'>
      <p className='font-medium'>{label}  {required && <span className='text-red-700'>*</span>} </p>
      <input className='border-0 border-b w-full border-black outline-none p-1 rounded-sm' name={name} value={value}  type={type}   placeholder={placeholder}  onChange={onChange}  required={required} />
    </div>
  )
}

export default InputFeild
