import { Skeleton } from '@mui/material'

const DashBoardLeftSection = () => {
  return (
    <div className='p-4 flex flex-col gap-6 overflow-y-scroll' >
    <h1 className='text-2xl'> Welcome,  Gopi Dashbaord</h1>
      <div className='flex gap-6 top-section'>
        <div className='border h-[160px]  w-[230px] '>
        <Skeleton variant="rectangular" sx={{height:"160px"}}/>

        </div>
        <div className='border h-[160px] w-[230px]'>
        <Skeleton variant="rectangular" sx={{height:"160px"}}/>

        </div>
        <div className='border h-[160px] w-[230px]'>
        <Skeleton variant="rectangular" sx={{height:"160px"}}/>

        </div>
        <div className='border h-[160px] w-[230px]'>
        <Skeleton variant="rectangular" sx={{height:"160px"}}/>
       </div>
      </div>
      <div className='h-[400px] border'>
      <Skeleton variant="rectangular" sx={{height:"400px"}}/>
      </div>
      <div className='h-[400px] border'>
      <Skeleton variant="rectangular" sx={{height:"400px"}}/>
      </div>
    </div>
  )
}

export default DashBoardLeftSection
