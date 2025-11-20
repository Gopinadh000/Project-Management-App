import DashBoardLeftSection from './sections/left-section/DashBoardLeftSection'
import DashboardRightSection from './sections/right-section/DashboardRightSection'

const DashboardPage = () => {
  return (
    <div className='flex h-full xxs:flex-col xs:flex-col sm:flex-col  md:flex-row  overflow-y-auto '>
      <div className=' xs:w-full sm:w-full  md:w-2/3   overflow-y-auto scroll-smooth scroll-m-0   '>
      <DashBoardLeftSection/> 
      </div>
      <div className='w-1/3 border h-screen max-h-[680px]'>
      <DashboardRightSection/>
      </div>
    
   
    </div>
  )
}

export default DashboardPage
