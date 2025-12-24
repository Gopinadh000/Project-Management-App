import { Skeleton } from "@mui/material";
import WelcomeSeaction from "../top-section/WelcomeSeaction";
import DashboardDisplayCard from "../../components/DashboardDisplayCard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import GradingIcon from "@mui/icons-material/Grading";

const lefttopseactiondata = [
  {
    id: 2,
    title: "Total Projects",
    icon: <ListAltIcon width={24} height={24} />,
    value: 120,
  },
  {
    id: 1,
    title: "Total Users",
    icon: <GroupAddIcon width={24} height={24} />,
    value: 350,
  },
  {
    id: 3,
    title: "Pending Tasks",
    icon: <PendingActionsIcon />,
    value: 120,
  },
  {
    id: 4,
    title: "Completed Tasks",
    icon: <GradingIcon />,
    value: 450,
  },
];

const DashBoardLeftSection = () => {
  return (
    <div className="p-4 flex  flex-col gap-6 overflow-y-scroll">
      <WelcomeSeaction />
      <div className="flex gap-6 top-section overflow-x-auto">
        {lefttopseactiondata.map((item) => (
          <DashboardDisplayCard key={item.id} cardData={item} />
        ))}
      </div>
      <div className="h-[300px] border">
        <Skeleton variant="rectangular" sx={{ height: "400px" }} />
      </div>
      <div className="h-[400px] border">
        <Skeleton variant="rectangular" sx={{ height: "400px" }} />
      </div>
    </div>
  );
};

export default DashBoardLeftSection;
