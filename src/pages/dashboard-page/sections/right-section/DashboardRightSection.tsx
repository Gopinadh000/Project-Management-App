import { Skeleton } from '@mui/material'

const DashboardRightSection = () => {
  return (
    <div className='flex gap-6 flex-col'>
      <div>
      <Skeleton variant="rectangular"  sx={{height:"340px"}}/>
      </div>
      <div>
      <Skeleton variant="rectangular"   sx={{height:"340px"}}/>
      </div>
    </div>
  )
}

export default DashboardRightSection
