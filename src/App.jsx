import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" index element={<JobsPage />} />
      <Route path="/add-job" index element={<JobsPage />} />
      <Route path="*" index element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
