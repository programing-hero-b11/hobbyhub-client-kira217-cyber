import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateGroup from "../pages/CreateGroup";
import GroupDetails from "../pages/GroupDetails";
import UpdateGroup from "../pages/UpdateGroup";
import MyGroups from "../pages/MyGroups";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      { 
        path: "groups/create", 
        Component: CreateGroup 
      },
      { 
        path: "myGroups", 
        Component: MyGroups 
      },
      { 
        path: "group/:id", 
        Component: GroupDetails
      },
      { 
        path: "updateGroup/:id", 
        Component: UpdateGroup
      },
    ],
  },
]);
