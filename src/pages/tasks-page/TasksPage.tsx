import  { useState } from "react";
import TitleCard from "../../components/title-card/TitleCard";
import { Button } from "@mui/material";

import { useTabContext } from "../../components/tabs/tabs-context/TabContext";
import TasksTabs from "./tabs/TasksTabs";
import DynamicTable from "./components/tasks-table/TasksTable";
import KanbanBoard from "../../components/kanban-board/KanbanBoard";
import { Modal } from "go-van-ui";
import { Box } from "@mui/material";

const TasksPage = ({ TabsData, border = true }: any) => {
  const { activeTab } = useTabContext();
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box className="h-screen">
      <TitleCard title="Tasks Page" />
      <Box
        className={`h-10 mt-2 flex items-center justify-between px-1 py-6  bg-white ${
          border && "border"
        }`}
      >
        <Box className={`h-12 flex items-center justify-between `}>
          <TasksTabs TabsData={TabsData} />
        </Box>
        <Box>
          <Button onClick={() => setOpenModal(true)} variant="contained">
            Add Task
          </Button>
        </Box>
      </Box>
      <Box className="mt-4 h-full">
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
