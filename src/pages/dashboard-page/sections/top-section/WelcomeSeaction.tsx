import { useAuth } from "../../../../services/context/AuthContext";

const WelcomeSeaction = () => {
    const {  user} =useAuth();

  return(<div className="p-4 border bg-white rounded-sm">
    <h1 className="text-2xl "> Welcome 
        <span className="text-blue-900 ml-2 font-semibold">{user?.name}</span>
    </h1>
  </div>);
};
export default WelcomeSeaction;
