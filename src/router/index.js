import { Navigate } from "react-router-dom"
import { lazy } from "react";

const Home = lazy(() => import('@/views/Home'));
const Detail = lazy(() => import('@/views/Detail'));
const Entire = lazy(() => import('@/views/Entire'));


const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entire',
    element: <Entire />
  }
];

export default routes;