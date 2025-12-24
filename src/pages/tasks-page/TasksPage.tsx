import  { useState } from "react";
import TitleCard from "../../components/title-card/TitleCard";
import { Button } from "@mui/material";

import { useTabContext } from "../../components/tabs/tabs-context/TabContext";
import TasksTabs from "./tabs/TasksTabs";
import DynamicTable from "./components/tasks-table/TasksTable";
import KanbanBoard from "../../components/kanban-board/KanbanBoard";
import { Modal } from "go-van-ui";

const TasksPage = ({ TabsData, border = true }: any) => {
  const { activeTab } = useTabContext();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <TitleCard title="Tasks Page" />
      <div
        className={`h-10 mt-2 flex items-center justify-between px-1 py-6 ${
          border && "border"
        }`}
      >
        <div>
          <TasksTabs TabsData={TabsData} />
        </div>
        <div>
          <Button onClick={() => setOpenModal(true)} variant="contained">
            Add Task
          </Button>
        </div>
      </div>
      <div className="mt-10 ">
        {activeTab == "TABLE_VIEW" ? <DynamicTable /> : <h1>Kanban</h1>}
      </div>
      <Modal
        size="md"
        modalType="side"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        Hello{" "}
      </Modal>
    </div>
  );
};
export default TasksPage;
