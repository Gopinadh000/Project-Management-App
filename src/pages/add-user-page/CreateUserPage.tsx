import { Box } from '@mui/material'
import React, {useState} from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'; 
import TitleCard from '../../components/title-card/TitleCard';
import UserInfo from './components/UserInfo';


const sidesmalldata = [
    {
        id:0,
        name:"users-info",
        displayName :"User info",
        icon: <PeopleAltIcon/>,
        key:"user-info"
    },
    {
        id:1,
        name:"address-info",
        displayName :"Address",
        icon: <PeopleAltIcon/>,
        key:"address-info"
    },
    {
        id:2,
        name:"education-info",
        displayName :"Education",
        icon: <PeopleAltIcon/>,
        key:"education-info"
    },

]

const CreateUserPage = () => {
    const [userTab , setUserTab]= useState('users-info')
  return (
    <div className='h-full'>
        <TitleCard title="Add User" />
        <Box className="flex gap-4">
        <Box className="w-[200px] h-[520px] border border-blue-50  flex flex-col gap-0   mt-4">
            {sidesmalldata.map((item)=> 
            <Box  onClick={()=> setUserTab(item.name)} key={item.id} className="hover:bg-blue-950 border hover:text-white cursor-pointer flex gap-2  h-10  px-4 py-2">
                {item.icon}
               {item.displayName}
            </Box>   
        )}
        </Box>
        <Box className="w-full border-2 flex flex-col gap-4  mt-4">
            {userTab == 'users-info' &&  <UserInfo/>}
            {userTab == 'address-info' &&  <h1>Adress Info</h1>}
            {userTab == 'education-info' &&  <h1>Education Info</h1>}
        </Box>


        </Box>
      
      
    </div>
  )
}

export default CreateUserPage
