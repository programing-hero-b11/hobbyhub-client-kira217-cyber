import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateGroup from "../pages/CreateGroup";
import GroupDetails from "../pages/GroupDetails";
import UpdateGroup from "../pages/UpdateGroup";
import MyGroups from "../pages/MyGroups";
import PrivetRoute from "../context/PrivetRoute";
import AllGroups from "../pages/AllGroups";

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
        path:"allGroups",
        Component:AllGroups,
      },
      { 
        path: "groups/create", 
        element:<PrivetRoute>
            <CreateGroup></CreateGroup>
        </PrivetRoute>
      },
      { 
        path: "myGroups", 
        element:<PrivetRoute>
            <MyGroups></MyGroups>
        </PrivetRoute>
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
