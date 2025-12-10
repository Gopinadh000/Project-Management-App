import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import QuickreplyIcon from '@mui/icons-material/Quickreply';

export const sidebardata = [
  {
    id: 0,
    name: "dashbaord",
    key: "dashbaord",
    title: "Dashboard",
    route: "/",
    icon: <DashboardIcon />,
  },
  {
    id: 1,
    name: "projects",
    key: "projects",
    title: "Projects",
    route: "/projects",
    icon: <ListAltIcon />,
  },
  {
    id: 2,
    name: "tasks",
    key: "tasks",
    title: "Tasks",
    route: "/tasks",
    icon: <AssignmentIcon />,
  },
  {
    id: 3,
    name: "users",
    key: "users",
    title: "Users",
    route: "/users",
    icon: <PeopleAltIcon />,
  },
  {
    id: 4,
    name: "settings",
    key: "settings",
    title: "Settings",
    route: "/settings",
    icon: <SettingsSuggestIcon />,
  },
  {
    id: 4,
    name: "ai-assistant",
    key: "ai-assistant",
    title: "Ai Assistant",
    route: "/ai-assistant",
    icon: <QuickreplyIcon />,
  },
  // {
  //   id: 4,
  //   name: "inbox",
  //   key: "inbox",
  //   title: "Inbox",
  //   route: "/inbox",
  //   icon: <QuickreplyIcon />,
  // },
  {
    id: 5,
    name: "Logout",
    key: "logout",
    title: "Logout",
    route: "/login",
    icon: <LogoutIcon />,
  },
];