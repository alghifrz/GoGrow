import React, { useState, useEffect } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const ProgramPage = ({ deleteProgram }) => {
  const { id } = useParams();
  const program = useLoaderData();
  const navigate = useNavigate();

  const onDeleteClick = (programId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) return;

    deleteProgram(programId);

    toast.success("Program deleted successfully");

    navigate("/programs");
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/programs"
            className="text-hover hover:text-primary flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Program Listings
          </Link>
        </div>
      </section>

      <section className="bg-bg">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-xl shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{program.duration}</div>
                <h1 className="text-3xl font-bold mb-4">{program.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaUser className="text-orange-700 mr-1" />
                  <p className="text-orange-700">
                    Mentor: {program.mentor.name}
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md mt-6">
                <h3 className="text-primary text-lg font-bold mb-6">
                  Program Description
                </h3>

                <p className="mb-4">{program.description}</p>

                <h3 className="text-primary text-lg font-bold mb-2">
                  Start Date:
                </h3>

                <p className="mb-4">
                  {program.start.split("-").reverse().join("/")}
                </p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-6">Mentor Info</h3>

                <h2 className="text-2xl">{program.mentor.name}</h2>

                <p className="my-2">{program.mentor.about}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 p-2 font-bold">{program.mentor.email}</p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 p-2 font-bold"> {program.mentor.phone}</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Program</h3>
                <Link
                  to={`/edit-program/${program.id}`}
                  className="bg-hover hover:bg-primary text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Program
                </Link>
                <button
                  onClick={() => onDeleteClick(program.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Program
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const programLoader = async ({ params }) => {
  const res = await fetch(`/api/programs/${params.id}`);
  const data = await res.json();
  return data;
};

export { ProgramPage as default, programLoader };
