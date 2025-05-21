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
import Loading from "../pages/Loading";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />, 
    children: [
      {
        index: true,
        hydrateFallbackElement:<Loading></Loading>,
        loader:()=>fetch('http://localhost:3000/groups'),
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
        hydrateFallbackElement:<Loading></Loading>,
        loader:()=>fetch('http://localhost:3000/groups'),
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
        loader:()=>fetch('http://localhost:3000/groups'), 
        element:<PrivetRoute>
            <MyGroups></MyGroups>
        </PrivetRoute>
      },
      { 
        path: "groups/:id",
        hydrateFallbackElement:<Loading></Loading>,
        loader:({params})=>fetch(`http://localhost:3000/groups/${params.id}`),
        element:<PrivetRoute>
          <GroupDetails></GroupDetails>
        </PrivetRoute>
      },
      { 
        path: "updateGroup/:id",
        hydrateFallbackElement:<Loading></Loading>,
        loader:({params})=>fetch(`http://localhost:3000/groups/${params.id}`), 
        element:<PrivetRoute>
          <UpdateGroup></UpdateGroup>
        </PrivetRoute>
      },
    ],
  },
]);
