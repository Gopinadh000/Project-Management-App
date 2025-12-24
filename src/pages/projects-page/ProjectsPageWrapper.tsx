import { TabsProvider } from "../../components/tabs/tabs-context/TabContext";
import ProjectsPage from "./ProjectsPage";
import ListIcon from '@mui/icons-material/List';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';


const TabsData = [
  {
    id: 1,
    label: "List View",
    key: "list-view",
    value: "LIST_VIEW",
    icon: <ListIcon />,
  },
  {
    id: 2,
    label: "Card View",
    key: "card-view",
    value: "CARD_VIEW",
    icon: <ViewKanbanIcon />,
  },
];

const ProjectsPageWrapper = () => {
    return (
      <TabsProvider initialTab={TabsData[0].value}>
        <ProjectsPage  TabsData={TabsData} />
      </TabsProvider>
    );
  };
  
  export default ProjectsPageWrapper;