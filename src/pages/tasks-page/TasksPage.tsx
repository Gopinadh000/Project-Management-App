import  { useState } from "react";
import TitleCard from "../../components/title-card/TitleCard";
import { Button } from "@mui/material";

import { useTabContext } from "../../components/tabs/tabs-context/TabContext";
import TasksTabs from "./tabs/TasksTabs";
import DynamicTable from "./components/tasks-table/TasksTable";
import KanbanBoard from "../../components/kanban-board/KanbanBoard";
import { Modal } from "go-van-ui";
import { Box } from "@mui/material";
import AppButton from "../../components/app-button/AppButton";

const TasksPage = ({ TabsData, border = true }: any) => {
  const { activeTab } = useTabContext();
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box className="flex flex-col gap-2 h-full border-2">
      <TitleCard title="Tasks" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.5px",
          borderRadius: "4px",
          backgroundColor: "var(--app-bg-primary)",
          boxShadow: "1px 1px 0px rgba(0, 0, 0, 0.09)",
          border: "0.85px solid var(--app-secondary-100)",
        }}
      >
        <Box className="flex items-center">
          <TasksTabs TabsData={TabsData} />
        </Box>
        <Box className="flex items-center gap-2 mr-2">
          <AppButton
            text="  Add Task"
            variant="contained"
            onClick={() => setOpenModal(true)}
            // iconName={<AddIcon />}
            // iconPosition="start"
            loading={false}
          />
        </Box>
      </Box>
      <Box className="flex flex-col mt-4 h-full">
        {activeTab == "TABLE_VIEW" ? <DynamicTable /> : <h1>Kanban</h1>}
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
