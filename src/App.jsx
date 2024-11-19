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
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  // ADD JOB OPERATION
  const addJob = async (newJob) => {
    // console.log(newJob);
    // POST REQUEST
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
  };

  // DELETE JOB OPERATION

  const deleteJob = async (id) => {
    console.log(id);
    // DELETE REQUEST
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
  };

   // EDIT JOB OPERATION

   const editJob =  async (job) => {
    console.log(" APP ::", job);
 
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });

    
  };



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" index element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          index
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/add-job"
          index
          element={<AddJobPage addJobSubmit={addJob} />}
        />
        <Route
          path="/edit-job/:id"
          index
          element={<EditJobPage updateJobSubmit={editJob} />}
          loader={jobLoader}
        />
        <Route path="*" index element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
