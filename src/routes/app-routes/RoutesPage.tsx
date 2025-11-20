import { Routes, Route } from "react-router-dom";
import UsersPage from "../../pages/users-page/UsersPage";
import DashboardPage from "../../pages/dashboard-page/DashboardPage";
import ProjectsPageWrapper from "../../pages/projects-page/ProjectsPageWrapper";
import TasksPageWrapper from "../../pages/tasks-page/TasksPageWrapper";
import SettingsPage from "../../pages/settings-page/SettingsPage";
import CreateUserPage from "../../pages/add-user-page/CreateUserPage";

const RoutesList = [
  { id: 1, 
    path: "/", 
    name: "dashbaord", 
    element: <DashboardPage /> ,
    hidden :false,
  },
  {
    id: 2,
    path: "/projects",
    name: "dashbaord",
    element: <ProjectsPageWrapper />,
    hidden :false,
  },
  { id: 3, 
    path: "/tasks", 
    name: "dashbaord", 
    element: <TasksPageWrapper /> ,
    hidden :false,
  },
  {
    id: 4,
    path: "/users",
    name: "dashbaord",
    element: <UsersPage />,
    hidden :false,
  },
  {
    id:6, 
    path :'/users/add',
    name : "add users",
    element : <CreateUserPage />,
    hidden :false,
  },
  {
    id:7, 
    path :'/users/view/:id',
    name : "add users",
    element : <h1>View  USER</h1>,
    hidden :false,
  },
  {
    id:8,
    path:"/settings",
    name:"settings",
    element: <SettingsPage/>,
    hidden :false,
  }
];

const AppRoutesPage = () => {
  return (
    <>
      <Routes>
        {RoutesList.map((item) => (
          <Route key={item.id} path={item.path} element={item.element} />
        ))}
      </Routes>
    </>
  );
};

export default AppRoutesPage;
