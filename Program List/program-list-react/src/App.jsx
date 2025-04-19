import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import React from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProgramsPage from "./pages/ProgramsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProgramPage, { programLoader } from "./pages/ProgramPage";
import AddProgramPage from "./pages/AddProgramPage";
import EditProgramPage from "./pages/EditProgramPage";

const App = () => {

  const addProgram = async (newProgram) => {
    const res = await fetch("/api/programs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProgram),
    });
    const data = await res.json();
    return data;
  };

  const deleteProgram = async (id) => {
    const res = await fetch(`/api/programs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  const updateProgram = async (program) => {
    const res = await fetch(`/api/programs/${program.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(program),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/add-program" element={<AddProgramPage addProgamSubmit={addProgram} />} />
        <Route path='/edit-program/:id' element={<EditProgramPage updateProgramSubmit={updateProgram} />}loader={programLoader}/>
        <Route path='/programs/:id'element={<ProgramPage deleteProgram={deleteProgram} />}loader={programLoader}/>
        <Route path="/programs/:id" element={<ProgramPage />} loader={programLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
};

export default App;
