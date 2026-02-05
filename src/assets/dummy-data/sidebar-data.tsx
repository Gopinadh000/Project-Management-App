import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import LogoutIcon from "@mui/icons-material/Logout";
import SourceIcon from "@mui/icons-material/Source";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

export const sidebardata = [
  {
    id: 1,
    name: "dashbaord",
    key: "dashbaord",
    title: "Dashboard",
    route: "/",
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    name: "projects",
    key: "projects",
    title: "Projects",
    route: "/projects",
    icon: <SourceIcon />,
  },
  {
    id: 3,
    name: "tasks",
    key: "tasks",
    title: "Tasks",
    route: "/tasks",
    icon: <AssignmentTurnedInIcon />,
  },
  {
    id: 4,
    name: "users",
    key: "users",
    title: "Users",
    route: "/users",
    icon: <PeopleAltIcon />,
  },

  {
    id: 5,
    name: "ai-assistant",
    key: "ai-assistant",
    title: "Ai Assistant",
    route: "/ai-assistant",
    icon: <QuickreplyIcon />,
  },
  {
    id: 6,
    name: "settings",
    key: "settings",
    title: "Settings",
    route: "/settings",
    icon: <SettingsIcon />,
  },
  // {
  //   id: 4,
  //   name: "inbox",
  //   key: "inbox",
  //   title: "Inbox",
  //   route: "/inbox",
  //   icon: <QuickreplyIcon />,
  // },
  // {
  //   id: 7,
  //   name: "Logout",
  //   key: "logout",
  //   title: "Logout",
  //   route: "/login",
  //   icon: <LogoutIcon />,
  // },
];