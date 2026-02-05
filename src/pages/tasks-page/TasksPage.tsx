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
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 3, height: "100%" }}
    >
      <TitleCard title="Tasks Page" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2px",
          borderRadius: "4px",
          backgroundColor: "var(--app-bg-primary)",
          // boxShadow: "1px 2px 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid var(--app-secondary-200)",
        }}
      >
        <Box className="flex items-center">
          <TasksTabs TabsData={TabsData} />
        </Box>
        <Box>
          <Button
            onClick={() => setOpenModal(true)}
            variant="contained"
            sx={{
              backgroundColor: "var(--app-primary-500)",
              color: "white",
              textTransform: "none",
              fontWeight: 500,
              px: 2,
              py: 0.5,
              "&:hover": {
                backgroundColor: "var(--app-primary-600)",
              },
            }}
          >
            Add Task
          </Button>
        </Box>
      </Box>
      <Box sx={{ flex: 1, minHeight: 0 }}>
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
