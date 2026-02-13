import { TabsProvider } from '../../components/tabs/tabs-context/TabContext'
import TasksPage from './TasksPage';
import ListIcon from '@mui/icons-material/List';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';


const TabsData = [
    { id: 1,
      label: "Table View", 
      key: "Table-view", 
      value:"TABLE_VIEW", 
      icon: <ListIcon/> 
    },
    {
      id: 2,
      label: "Kanban View",
      key: "kanban-view",
      value:"KANBAN_VIEW",
      icon: <ViewKanbanIcon/>,
    },
    {
      id:3,
      label:"Dashboard View",
      key:"dashboard-view",
      value:"DASHBOARD_VIEW",
      icon:<ViewTimelineIcon/>
    },
     // {
    //   id: 2,
    //   label: "Tiles View",
    //   key: "tiles-view",
    //   value:"TILES_VIEW",
    //   icon: <ViewKanbanIcon/>,
    // },
     // {
    //   id:3,
    //   label:"Gantt View",
    //   key:"gantt-view",
    //   value:"GANTT_VIEW",
    //   icon:<ViewTimelineIcon/>
    // },
  ];

const TasksPageWrapper = () => {

  return (
    <>
      <TabsProvider initialTab={TabsData[0].value}>
        <TasksPage TabsData={TabsData} />
      </TabsProvider>
    </>
  );
}

export default TasksPageWrapper
