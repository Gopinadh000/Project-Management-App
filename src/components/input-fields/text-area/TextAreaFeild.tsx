
const TextAreaFeild = ({name , value ,rows ,cols , label , required , placeholder , onChange}:any) => {
  return (
    <div className='p-2 flex flex-col gap-2'>
        <p>{label}  {required && <span className='text-red-700'>*</span>} </p>
        <textarea className='w-full  min-h-[100px] outline-none border border-black p-1 text-md'  name={name}  value={value} onChange={onChange} rows={rows} cols={cols}  placeholder={placeholder}/>
    </div>
  )
}

export default TextAreaFeild
