import { Box } from '@mui/material'
import {useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'; 
import TitleCard from '../../components/title-card/TitleCard';
import UserInfo from './components/UserInfo';
import UserAddress from './components/UserAdress';
import UserEducation from './components/UserEducation';


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
    const [searchParams, setSearchParams] = useSearchParams();
    const currentTab = searchParams.get('tab') || 'users-info';

    // Set default tab if no tab parameter exists
    useEffect(() => {
        if (!searchParams.get('tab')) {
            setSearchParams({ tab: 'users-info' }, { replace: true });
        }
    }, [searchParams, setSearchParams]);

    const handleTabChange = (tabName: string) => {
        setSearchParams({ tab: tabName });
    };

  return (
    <div className="h-full">
      <TitleCard title="Add User" />
      <Box className="flex gap-4">
        <Box className="w-[200px] h-[520px] border border-blue-50  flex flex-col gap-0   mt-4">
          {sidesmalldata.map((item) => (
            <Box
              onClick={() => handleTabChange(item.name)}
              key={item.id}
              className={`hover:bg-blue-950 border hover:text-white cursor-pointer flex gap-2  h-10  px-4 py-2 ${
                currentTab === item.name ? 'bg-blue-950 text-white' : ''
              }`}
            >
              {item.icon}
              {item.displayName}
            </Box>
          ))}
        </Box>
        <Box className="w-full border-2 flex flex-col gap-4  mt-4">
          {currentTab === "users-info" && <UserInfo />}
          {currentTab === "address-info" && <UserAddress />}
          {currentTab === "education-info" && <UserEducation />}
        </Box>
      </Box>
    </div>
  );
}

export default CreateUserPage
