import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFoundPage() {
  return (
    <>
      <section className="text-center flex flex-col justify-center items-center h-96">
        <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
        <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
        <p className="text-xl mb-5">This page does not exist</p>
        <Link
          to={"/"}
          className="block bg-hover hover:bg-primary text-white text-center py-4 px-6 rounded-xl"
        >
          Go Back
        </Link>
      </section>
    </>
  );
}

export default NotFoundPage;
