import { Skeleton } from '@mui/material'
import UpcomingProjects from "../../components/UpcomingProjects";

const DashboardRightSection = () => {
  return (
    <div className="flex h-full overflow-hidden gap-6 flex-col gap-4">
      <div className="flex flex-col gap-6 h-1/2 overflow-y-auto">
        <UpcomingProjects />
      </div>
      <div className="flex flex-col gap-6 h-1/2 overflow-y-auto">
        <Skeleton variant="rectangular" />
      </div>
    </div>
  );
};

export default DashboardRightSection
