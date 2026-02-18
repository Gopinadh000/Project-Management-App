import  { useState } from "react";
import TitleCard from "../../components/title-card/TitleCard";


import { useTabContext } from "../../components/tabs/tabs-context/TabContext";
import TasksTabs from "./tabs/TasksTabs";

import KanbanBoard from "../../components/kanban-board/KanbanBoard";
import { Modal } from "go-van-ui";
import { Box } from "@mui/material";
import AppButton from "../../components/app-button/AppButton";
import AppDataTable from "../../components/app-table/AppDataTable";

const TasksPage = ({ TabsData, projectId }: any) => {
  const { activeTab } = useTabContext();
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box className="flex flex-col gap-2 h-full">
      <TitleCard title="Tasks" />
      <Box className="border-[0.85px] border-app-secondary-50 shadow-sm bg-app-primary rounded-sm flex justify-between items-center">
        <Box className="flex items-center p-1">
          <TasksTabs TabsData={TabsData} />
        </Box>
        <Box className="flex items-center gap-2 mr-2">
          <AppButton
            text="  Add Task"
            variant="contained"
            onClick={() => setOpenModal(true)}
            loading={false}
          />
        </Box>
      </Box>
      <Box className="flex flex-col  mt-4 h-full">
        {activeTab == "TABLE_VIEW" && (
          <AppDataTable
            tableInstanceDetails={{
              apiUrl: "projectstable/data",
              tableId: "projects",
            }}
            initialQueryParams={{
              search: {
                projectId: projectId,
              },
            }}
          />
        )}
        {activeTab == "KANBAN_VIEW" && <KanbanBoard />}
      </Box>
      <Modal
        size="md"
        modalType="side"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        Hello{" "}
      </Modal>
    </Box>
  );
};
export default TasksPage;
