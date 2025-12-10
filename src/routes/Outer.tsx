import { Outlet } from 'react-router-dom';


const Outer = () => {
  return <div>
    <Outlet/>
  </div>;
};

export default Outer;
