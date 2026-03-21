import { Box } from "@mui/material";
import { useSearchParams } from "react-router-dom"; // Added import
import TitleCard from "../../components/title-card/TitleCard";
import { Settings } from "@mui/icons-material";
import SettingsTabs from "./components/SettingsTabs";
import SettingsTabContent from "./components/SettingsTabContent";

const SettingsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "profile"; // Read from URL, default to "profile"

  const handleTabChanging = (tabname: string) => {
    setSearchParams({ tab: tabname }); // Update URL
  };

  return (
    <div className="h-full flex flex-col">
      <TitleCard title="Settings" />
      <p className="text-app-secondary-800">
        Manage your account and application preferences
      </p>
      <Box className="flex h-full mt-5 flex-row border border-app-secondary-200 rounded">
        <Box className="w-1/5 border-r h-full">
          <SettingsTabs
            handleOnTabChange={handleTabChanging}
            activeTab={activeTab}
          />
        </Box>
        <Box className="w-4/5 p-4">
          <SettingsTabContent tabName={activeTab} />
        </Box>
      </Box>
    </div>
  );
};

export default SettingsPage;
