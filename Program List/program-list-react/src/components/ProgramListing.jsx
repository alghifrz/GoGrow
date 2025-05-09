import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProgramListing = ({ program }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = program.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{program.duration}</div>
            <h3 className="text-xl font-bold">{program.title}</h3>
          </div>

          <div className="mb-5">{description}</div>

          <button
            onClick={() => setShowFullDescription((prevState) => !prevState)}
            className="text-hover mb-5 hover:text-primary"
          >
            {showFullDescription ? "Less" : "More"}
          </button>

          <h3 className="text-primary mb-2">
            Start: {new Date(program.start).toLocaleDateString("id-ID")}
          </h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <FaUser className="inline text-lg mb-1 mr-1" />
              Mentor: {program.mentor.name}
            </div>
            <Link
              to={`/programs/${program.id}`}
              className="h-[36px] bg-hover hover:bg-primary text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramListing;
