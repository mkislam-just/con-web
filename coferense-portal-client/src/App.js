import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AppRouter from './AppRouter';


const RouteJSX = (
  <>
    <AppRouter />
  </>
);

const routes = createRoutesFromElements(RouteJSX);

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
